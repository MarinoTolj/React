import React, { useEffect } from "react";
import WorkoutList from "./WorkoutList";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { resetWorkoutExercises, deleteUser } from "../actions";
import { useDispatch } from "react-redux";
import { LoadWorkoutExercises } from "../reducers/workoutExercises";

export default function User() {
  const id = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verify = async () => {
    try {
      const response = await fetch("http://localhost:5000/users/verify", {
        method: "POST",
        headers: {
          jwt_token: localStorage.token,
        },
      });

      const parseData = await response.json();

      if (parseData.status !== 200 || id.id != parseData.id) {
        toast.error("It seems u dont have account pls login or register", {
          autoClose: 2500,
        });
        navigate("/home");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      dispatch(resetWorkoutExercises());
      toast.success("Logout Success");
      dispatch(deleteUser());
      navigate("/home");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    verify();
    dispatch(LoadWorkoutExercises(id.id));
  }, []);

  return (
    <div>
      <h1>Your Workout Exercises</h1>
      <WorkoutList userId={id.id} />
      <Link to="/exercises">
        <Button>Choose Exercises</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </Link>
    </div>
  );
}
