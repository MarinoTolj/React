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
        case "RESET":
            return{
                allExercises:[]
            }
        
        default:
            return state
    }
}

export default availableExercisesReducer;