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
        default:
            return state
    }

}

export default exercisesTypesReducer;