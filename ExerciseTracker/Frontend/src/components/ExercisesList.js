import React from 'react'
import { Link} from 'react-router-dom';
import {Container } from 'react-bootstrap';
import "../ExercisesList.css"
import Cards from "./Cards"


export default function ExercisesList() {

    return (
        <div>

            <h2>List of avaiable exercises</h2>

            <Container id="cards-list">
                <Cards />
            </Container>
            
            <Link to="createNewExercise">
                <button>
                    Create new exercise
                </button>
            </Link>

            <Link to="createNewExerciseType">
                <button>
                    Create new exercise type
                </button>
            </Link>
            
        </div>
    )
}
