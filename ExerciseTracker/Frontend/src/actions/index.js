export const createTypeOfExercise = (newTypeOfExercise) => {
  return {
    type: "CREATE_TYPE_OF_EXERCISE",
    payload: newTypeOfExercise,
  };
};

export const resetWorkoutExercises = () => {
  return {
    type: "RESET_WORKOUT_EXERCISES",
  };
};

export const loadTypes = (types) => ({
  type: "LOAD_TYPES",
  payload: types,
});

export const loadAvailableExercises = (availableExercises) => ({
  type: "LOAD_AVAILABLE_EXERCISES",
  payload: availableExercises,
});

export const loadWorkoutExercises = (workoutExercises) => ({
  type: "LOAD_WORKOUT_EXERCISES",
  payload: workoutExercises,
});
