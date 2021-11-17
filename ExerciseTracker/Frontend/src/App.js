import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import NavBar from "./components/NavBar"
import ExercisesList from './components/ExercisesList';
import Home from './components/Home';
import CreateNewExercise from './components/CreateNewExercise';
import {useSelector} from "react-redux"

import TypeList from './components/TypeList';
import CreateNewExerciseType from './components/CreateNewExerciseType';
import LoginPage from './components/LoginPage';
import Registration from './components/Registration';



function App() {
  const exercisesTypes =useSelector(state=>state.typesOfExercises.typesOfExercises)

  return (
    <div className="App">
      <Router basename="/">
        
        <NavBar />

        <Routes>  
          <Navigate from="/" to ="/home" />

          <Route path="/exercises" element={<ExercisesList />} /> 
            
          <Route path="/home" element={<Home />} />
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/users/registration" element={<Registration />} />
                      
          <Route path="/exercises/createNewExercise" element={<CreateNewExercise />} />
          <Route path="/exercises/createNewExerciseType" element={<CreateNewExerciseType />} />

          {exercisesTypes.map((item, index)=>
            <Route key={index} path={`/exercises/${item.type}`} element={<TypeList type={item} />}/>
            )}
          
        </Routes>

      </Router>
      
    </div>
    
  );
}



export default App;
