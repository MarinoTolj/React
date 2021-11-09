import React from 'react'
import { addWorkoutExercise, deleteAvailableExercise } from '../actions';
import {useDispatch, useSelector} from "react-redux"
import {Button} from "react-bootstrap"
import "../Table.css"

export default function Type({exercise}) {

    const workoutExercises=useSelector(state=>state.workoutExercises.exercises)
    const dispatch = useDispatch();

    const handleAddition=(e)=>{
        e.preventDefault();
        console.log(exercise.id)

        if(!workoutExercises.includes(exercise))
            dispatch(addWorkoutExercise(exercise))
        else
            alert("You can not choose same exercise.")
    }

    const handleDelete=(e)=>{
        e.preventDefault();
        dispatch(deleteAvailableExercise(exercise.id))
    }


    return (
        <tr>
            <td className="table-data">
                <b style={{color:"blue"}}>{exercise.title}</b> <br/>
                {exercise.details}
            </td>

            <td>
                <Button type="submit" onClick={handleAddition}>Add</Button>
            </td>

            <td>
                <Button style={{background:"red", border:"red"}} type="submit" onClick={handleDelete}>Delete</Button>
            </td>
        </tr>
    )
}
