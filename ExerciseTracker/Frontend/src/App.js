import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ExercisesList from "./components/ExercisesList";
import Home from "./components/Home";
import CreateNewExercise from "./components/CreateNewExercise";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import TypeList from "./components/TypeList";
import CreateNewExerciseType from "./components/CreateNewExerciseType";
import LoginPage from "./components/LoginPage";
import Registration from "./components/Registration";
import User from "./components/User";
import { LoadTypes } from "./reducers/exercisesTypes";
import { LoadAvailableExercises } from "./reducers/availableExercises";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  const exercisesTypes = useSelector(
    (state) => state.typesOfExercises.typesOfExercises
  );
  const user = useSelector((state) => state.user.user);

  toast.configure();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadTypes());
    dispatch(LoadAvailableExercises());
  }, []);

  return (
    <div className="App">
      {
        <Router>
          <NavBar />

          <Routes>
            <Route path="/exercises" element={<ExercisesList />} />

            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />

            <Route path="/users/user:id" element={<User />} />
            {!user.id && <Route path="/users/login" element={<LoginPage />} />}
            <Route path="/users/registration" element={<Registration />} />

            <Route
              path="/exercises/createNewExercise"
              element={<CreateNewExercise />}
            />
            <Route
              path="/exercises/createNewExerciseType"
              element={<CreateNewExerciseType />}
            />

            {exercisesTypes.map((item, index) => (
              <Route
                key={index}
                path={`/exercises/${item.type}`}
                element={<TypeList type={item} />}
              />
            ))}
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
