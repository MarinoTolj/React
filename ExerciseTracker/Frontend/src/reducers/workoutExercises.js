import {loadWorkoutExercises, updateUserExercises} from "../actions"

const workoutExercisesReducer=(state={exercises:[]}, action)=>{

    switch(action.type){
        case "ADD_WORKOUT_EXERCISE":
            return{
                ...state,
                exercises:[action.payload, ...state.exercises]
            }
        case "DELETE_WORKOUT_EXERCISE":
            return{
                exercises:state.exercises.filter(item=>item.id!==action.payload)
            }
            
        case "RESET":
            return{
                exercises:[]
            }
        case "LOAD_WORKOUT_EXERCISES":
            return{
                ...state,
                exercises:action.payload
            }
        default:
            return state
    }
}

export const LoadWorkoutExercises =()=>async(dispatch)=>{
    try {
        const workoutExercises=await fetch("http://localhost:5000/workoutExercises").then(res=>res.json())
        console.log(workoutExercises)
        dispatch(loadWorkoutExercises(workoutExercises))

    } catch (error) {
        console.error(error)
    }
}

export const UpdateWorkoutExercises =()=>async(dispatch)=>{
    try {
        const workoutExercises=await fetch("http://localhost:5000/workoutExercises", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(workoutExercises)
        })
        dispatch(loadWorkoutExercises(workoutExercises))

    } catch (error) {
        console.error(error)
    }
}

export default workoutExercisesReducer;