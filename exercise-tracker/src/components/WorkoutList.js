import React from 'react'
import Workout from './Workout'
import { Table,Container, Row, Col, Button} from 'react-bootstrap'
import {useSelector} from "react-redux"
import "../Table.css"
import Cards from "./Cards"



export default function WorkoutList() {
    const workoutExercises=useSelector(state=>state.workoutExercises.exercises)

    return (
        <Container>

            <Row className="justify-content-md-center">
                
                <Col xs={8}>
                    <Row>
                        <Table striped bordered size="sm" id="table">
                            
                            <tbody>
                            {workoutExercises.map((item, index)=>(
                                <Workout key={index} workoutExercise={item}/>
                            ))}
                            </tbody>

                        </Table>

                    </Row>
                </Col>

                {/* <Col>
                    <Button variant="primary" type="sumbit" onClick={handleRoute}> <b>{"<"}</b>All exercises</Button>
                    <Cards />
                </Col> */}

            </Row>
        </Container>
    )
}
