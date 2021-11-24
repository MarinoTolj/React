import React from 'react'
import { addWorkoutExercise, deleteAvailableExercise, loadWorkoutExercises } from '../actions';
import {useDispatch, useSelector} from "react-redux"
import {Button} from "react-bootstrap"
import "../Table.css"
import {useEffect, useState} from "react"
import { LoadWorkoutExercises } from '../reducers/workoutExercises';

export default function Type({exercise}) {

    const workoutExercises=useSelector(state=>state.workoutExercises.exercises)
    const dispatch = useDispatch();
    console.log("vjezba", exercise.exercise_id)
    
    const handleAddition=async(e)=>{
        e.preventDefault();
        try {
            const response=await fetch("http://localhost:5000/userupdate",{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({id:exercise.exercise_id})
            })
            const jsonmsg=await response.json()

            console.log(jsonmsg)

        } catch (error) {
            console.error(error)
        }
       dispatch(LoadWorkoutExercises())
    }

    const handleDelete=(e)=>{
        e.preventDefault();
        dispatch(deleteAvailableExercise(exercise.id))
    }

    
    return (
        <tr>
            <td className="table-data">
                <b style={{color:"blue"}}>{exercise.name}</b> <br/>
                {exercise.description}
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
