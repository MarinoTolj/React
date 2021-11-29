import { loadWorkoutExercises } from "../actions";

const workoutExercisesReducer = (state = { exercises: [] }, action) => {
  switch (action.type) {
    case "RESET_WORKOUT_EXERCISES":
      return {
        ...state,
        exercises: [],
      };
    case "LOAD_WORKOUT_EXERCISES":
      return {
        ...state,
        exercises: action.payload,
      };
    default:
      return state;
  }
};

export const LoadWorkoutExercises = (id) => async (dispatch) => {
  try {
    console.log("id+", id);
    const workoutExercises = await fetch(
      `http://localhost:5000/users/user/workoutExercises`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      }
    ).then((res) => res.json());
    console.log("workoutExerc", workoutExercises);
    dispatch(loadWorkoutExercises(workoutExercises));
  } catch (error) {
    console.error(error);
  }
};

export const DeleteWorkoutExercises = (id, userId) => async (dispatch) => {
  try {
    await fetch("http://localhost:5000/users/user/workoutExercises", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).then((res) => res.json());

    const workoutExercises = await fetch(
      `http://localhost:5000/users/user/workoutExercises`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId }),
      }
    ).then((res) => res.json());

    dispatch(loadWorkoutExercises(workoutExercises));

    console.log("workoutExerc", workoutExercises);
  } catch (error) {
    console.error(error);
  }
};

export default workoutExercisesReducer;
