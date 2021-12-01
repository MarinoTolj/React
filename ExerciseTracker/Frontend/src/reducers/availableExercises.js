import { loadAvailableExercises } from "../actions";

const availableExercisesReducer = (state = { allExercises: [] }, action) => {
  switch (action.type) {
    case "LOAD_AVAILABLE_EXERCISES":
      return {
        ...state,
        allExercises: action.payload,
      };

    default:
      return state;
  }
};

export const LoadAvailableExercises = () => async (dispatch) => {
  try {
    const availableExercises = await fetch(
      "http://localhost:5000/exercises"
    ).then((res) => res.json());

    dispatch(loadAvailableExercises(availableExercises));
  } catch (error) {
    console.error(error);
  }
};

export const DeleteAvailableExercise = (exerciseId) => async (dispatch) => {
  try {
    console.log("del", exerciseId);

    await fetch("http://localhost:5000/exercises/deleteExercise", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ exerciseId }),
    });
  } catch (error) {
    console.error(error);
  }
};

export default availableExercisesReducer;
