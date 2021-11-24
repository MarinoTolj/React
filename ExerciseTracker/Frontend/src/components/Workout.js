/* import Button from '@restart/ui/esm/Button' */
import React from 'react'
import {useDispatch} from "react-redux"
import { deleteWorkoutExercise } from '../actions'
import {Button} from 'react-bootstrap'

export default function Workout({workoutExercise}) {
    const dispatch=useDispatch()

    const handleDelete=(e)=>{
        e.preventDefault();
        console.log(workoutExercise.id)
        dispatch(deleteWorkoutExercise(workoutExercise.id))
    }

    return (
        <tr>
            <td className="table-data">
                <b style={{color:"blue"}}>{workoutExercise.name}</b> <br/>
                {workoutExercise.description}
            </td>
            <td className="table-data">
                <Button type="submit" style={{background:"red", border:"red"}} onClick={handleDelete}>Delete</Button>
            </td>
        </tr>
        

    )
}
