import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useState } from 'react'
import "../CreateNewExercise.css"
import { createAvailableExercise } from '../actions'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Dropdown } from 'react-bootstrap'

export default function CreateNewExercise() {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const typesOfExercises=useSelector(state=>state.typesOfExercises.typesOfExercises)

    const [title, setTitle]=useState("");
    const [intesity, setIntesity]=useState("");
    const [details, setDetails]=useState("");
    const [type, setType]=useState("");

    

    const handleCreate=(e)=>{
        e.preventDefault();
        
        const newExercise={
            title:title,
            intesity:intesity,
            details:details,
            type:type,
            id:Math.floor(Math.random()*10000)
        }
        console.log(newExercise)
        dispatch(createAvailableExercise(newExercise))
        navigate("/exercises")
        
    }

    return (
        <div>
            <h1 id="title">Create New Exercise</h1>

            <Form id="create-exercise-form">
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Add title to your new exercise" onChange={(e)=>setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Intesity</Form.Label>
                    <Form.Control type="text" placeholder="Add intesity to your new exercise e.g 3 times per week" onChange={(e)=>setIntesity(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Details</Form.Label>
                    <Form.Control type="text" as="textarea" placeholder="Add other details to your exercise" onChange={(e)=>setDetails(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    
                    <Dropdown onSelect={(e)=>setType(e)}>
                        <Dropdown.Toggle>
                            {type!=="" ? type : "Type"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {typesOfExercises.map(item=>(
                                <Dropdown.Item eventKey={item.type} >{item.type}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                        
                    </Dropdown>
                </Form.Group>


                <Button variant="primary" type="sumbit" onClick={handleCreate}>Create</Button>
            </Form>

        </div>
    )
}
