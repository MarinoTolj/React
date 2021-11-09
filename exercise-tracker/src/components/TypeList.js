import React from 'react'
import { Table,Container, Row, Col, Button} from 'react-bootstrap'
import {useSelector} from "react-redux"
import "../Table.css"
import { useNavigate } from 'react-router-dom'
import Cards from "./Cards"
import Type from "./Type"

export default function TypeList({type}) {

    const exercises=useSelector(state=>state.availableExercises.allExercises)
   
    const typeExercises=exercises.filter(exercise=>exercise.type===type.type)
    const navigate=useNavigate()

    const handleRoute=(e)=>{
        e.preventDefault()
        navigate("/exercises")
        console.log(typeExercises)
    }


    return (
      
        <Container fluid="md">
            <Row className="justify-content-md-center">
                
                <Col xs={8}>
                    <Row>
                        <h1>{type.type}</h1>
                    </Row>

                    <Row>
                        <Table striped bordered size="sm" id="table">
                            
                            <tbody>
                                {typeExercises.map((item, index)=>(      
                                    <Type exercise={item} key={index}/>
                                ))}
                            </tbody>

                        </Table>

                    </Row>
                </Col>

                <Col>
                    <Button variant="primary" type="sumbit" onClick={handleRoute}> <b>{"<"}</b>All exercises</Button>
                    <Cards path="#top"/>
                </Col>

            </Row>
        </Container>
        
    )
}
