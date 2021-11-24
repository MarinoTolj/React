import {loadTypes} from "../actions"


const exercisesTypesReducer=(state={typesOfExercises:[]}, action)=>{
    switch(action.type){
        case "CREATE_TYPE_OF_EXERCISE":
            return{
                ...state,
                typesOfExercises:[action.payload, ...state.typesOfExercises]
            }
        case "DELETE_TYPE_OF_EXERCISE":
            return{
                typesOfExercises:state.typesOfExercises.filter(item=>action.payload!==item.typeID)
            }

        case "RESET":
            return{
                typesOfExercises:[]
            }
        case "LOAD_TYPES":
            return{
                ...state,
                typesOfExercises:action.payload
            }
        default:
            return state
    }

}

export const LoadTypes =()=>async(dispatch)=>{
    try {
        const types=await fetch("http://localhost:5000/exercises/createNewExercise").then(res=>res.json())
        dispatch(loadTypes(types))
    } catch (error) {
        console.error(error)
    }
};

export default exercisesTypesReducer;