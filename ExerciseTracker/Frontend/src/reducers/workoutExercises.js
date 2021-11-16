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
        default:
            return state
    }
}

export default workoutExercisesReducer;