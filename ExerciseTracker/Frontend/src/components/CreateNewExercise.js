import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../CreateNewExercise.css";
import { LoadAvailableExercises } from "../reducers/availableExercises";
import { useNavigate } from "react-router-dom";
import { Form, Button, Dropdown } from "react-bootstrap";

export default function CreateNewExercise() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const typesOfExercises = useSelector(
    (state) => state.typesOfExercises.typesOfExercises
  );

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [typeId, setTypeId] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const newExercise = {
        title,
        description,
        typeId,
      };

      await fetch("http://localhost:5000/exercises/createNewExercise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newExercise),
      });

      navigate("/exercises");
    } catch (error) {
      console.error(error);
    }

    dispatch(LoadAvailableExercises());
  };

  return (
    <div>
      <h1 id="title">Create New Exercise</h1>

      <Form id="create-exercise-form">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add title to your new exercise"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        {/* <Form.Group>
                    <Form.Label>Intesity</Form.Label>
                    <Form.Control type="text" placeholder="Add intesity to your new exercise e.g 3 times per week" onChange={(e)=>setIntesity(e.target.value)}/>
                </Form.Group> */}

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            placeholder="Add other description to your exercise"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Dropdown onSelect={(evt) => setTypeId(evt)}>
            <Dropdown.Toggle>Type</Dropdown.Toggle>
            {/* <Dropdown.Menu >
                            {type[0] && type.map(item=>(
                                <Dropdown.Item key={item[0]} eventKey={item[1].exercise_type_id} >{item[1].type}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu> */}
            <Dropdown.Menu>
              {typesOfExercises.map((item) => (
                <Dropdown.Item
                  key={item.exercise_type_id}
                  eventKey={item.exercise_type_id}
                >
                  {item.type}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Button variant="primary" type="sumbit" onClick={handleCreate}>
          Create
        </Button>
        {/* <Button variant="primary" type="sumbit" onClick={onLoad}>Load</Button> */}
      </Form>
    </div>
  );
}
