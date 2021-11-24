import React from 'react'
import WorkoutList from "./WorkoutList"
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"

export default function User() {

    const handleClick=async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/workoutExercises")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Your Workout Exercises</h1>
            <WorkoutList />
            {/* <button onClick={handleClick}>Load</button> */}
            <Link to="/exercises">
                <Button>
                    Choose Exercises
                </Button>
            </Link>
        </div>
    )
}
