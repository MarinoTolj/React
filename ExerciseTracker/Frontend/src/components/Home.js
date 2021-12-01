import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "../Home.css";
import { fetchUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleAuth = async (e) => {
    try {
      const res = await fetch("http://localhost:5000/users/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      console.log(parseRes);
      if (parseRes.status === 200) {
        dispatch(fetchUser(parseRes.id, parseRes.name));
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container id="home-container">
      <h1 className="home-items">Welcome to ExerciseTracker</h1>
      <Link
        className="home-items"
        to={user.id !== undefined ? "/home" : "/users/login"}
      >
        <Button>Login</Button>
      </Link>
      <Link
        className="home-items"
        to={user.id !== undefined ? "/home" : "/users/registration"}
      >
        <Button>Register</Button>
      </Link>
      <Link className="home-items" to={`/users/user${user.id}`}>
        <Button type="submit" onClick={handleAuth}>
          Your Workouts
        </Button>
      </Link>
    </Container>
  );
}
