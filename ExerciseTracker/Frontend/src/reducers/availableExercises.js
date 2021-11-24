import {loadAvailableExercises} from "../actions"

const availableExercisesReducer=(state={allExercises:[]}, action)=>{

    switch(action.type){
        case "CREATE_AVAILABLE_EXERCISE":
            return{
                ...state,
                allExercises:[action.payload, ...state.allExercises]
            }
        case "DELETE_AVAILABLE_EXERCISE":
            return{
                allExercises:state.allExercises.filter(item=>item.id!==action.payload)
            }
        case "LOAD_AVAILABLE_EXERCISES":
            return{
                ...state,
                allExercises:action.payload
            }
        case "RESET":
            return{
                allExercises:[]
            }
        
        default:
            return state
    }
}

export const LoadAvailableExercises=()=>async(dispatch)=>{
    try {
        const availableExercises=await fetch("http://localhost:5000/exercises").then(res=>res.json())
        console.log(availableExercises)
        dispatch(loadAvailableExercises(availableExercises))
    } catch (error) {
        console.error(error)
    }
}

export default availableExercisesReducer;