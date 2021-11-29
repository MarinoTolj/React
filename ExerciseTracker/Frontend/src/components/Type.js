import React from "react";
import { DeleteAvailableExercise } from "../reducers/availableExercises";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import "../Table.css";

export default function Type({ exercise }) {
  const dispatch = useDispatch();

  const handleAddition = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users/updateuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          jwt_token: localStorage.token,
        },
        body: JSON.stringify({ id: exercise.exercise_id }),
      }).then((res) => res.json());

      console.log(response.msg);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (e) => {
    dispatch(DeleteAvailableExercise(exercise.exercise_id));
  };

  return (
    <tr>
      <td className="table-data">
        <b style={{ color: "blue" }}>{exercise.name}</b> <br />
        {exercise.description}
      </td>

      <td>
        <Button type="submit" onClick={handleAddition}>
          Add
        </Button>
      </td>

      <td>
        <Button
          style={{ background: "red", border: "red" }}
          type="submit"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
