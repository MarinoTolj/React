export const addWorkoutExercise=(exercise)=>{
    return{
        type:"ADD_WORKOUT_EXERCISE",
        payload: exercise
    }
}
export const deleteAvailableExercise=(id)=>{
    return{
        type:"DELETE_AVAILABLE_EXERCISE",
        payload:id
    }
}

export const deleteWorkoutExercise=(id)=>{
    return{
        type:"DELETE_WORKOUT_EXERCISE",
        payload:id
    }
}


export const createAvailableExercise=(newExercise)=>{
    return{
        type:"CREATE_AVAILABLE_EXERCISE",
        payload: newExercise
    }

}

export const createTypeOfExercise=(newTypeOfExercise)=>{
    return{
        type:"CREATE_TYPE_OF_EXERCISE",
        payload: newTypeOfExercise
    }
}

export const deleteTypeOfExercise=(typeID)=>{
    return{
        type:"DELETE_TYPE_OF_EXERCISE",
        payload: typeID
    }
}

export const resetRedux=()=>{
    return{
        type:"RESET"
    }
}

export const loadTypes=(types)=>({
    type:"LOAD_TYPES",
    payload:types
})

export const loadAvailableExercises=(availableExercises)=>({
    type:"LOAD_AVAILABLE_EXERCISES",
    payload:availableExercises
})

export const loadWorkoutExercises=(workoutExercises)=>({
    type:"LOAD_WORKOUT_EXERCISES",
    payload:workoutExercises
})

export const updateUserExercises=(userExercisesId)=>({
    type:"UPDATE_USER_EXERCISES",
    payload:userExercisesId
})