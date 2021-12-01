import { combineReducers } from "redux";
import availableExercisesReducer from "./availableExercises";
import workoutExercisesReducer from "./workoutExercises";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import exercisesTypesReducer from "./exercisesTypes";
import userReducer from "./user";

const persistConfig = {
  key: "root",
  storage,
};

export const allReducers = combineReducers({
  availableExercises: availableExercisesReducer,
  workoutExercises: workoutExercisesReducer,
  typesOfExercises: exercisesTypesReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, allReducers);
