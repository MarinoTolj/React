/* import Button from '@restart/ui/esm/Button' */
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { DeleteWorkoutExercises } from "../reducers/workoutExercises";

export default function Workout({ workoutExercise, userId }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(
      DeleteWorkoutExercises(workoutExercise.users_exercises_id, userId)
    );
  };

  return (
    <tr>
      <td className="table-data">
        <b style={{ color: "blue" }}>{workoutExercise.name}</b> <br />
        {workoutExercise.description}
      </td>
      <td className="table-data">
        <Button
          type="submit"
          style={{ background: "red", border: "red" }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
