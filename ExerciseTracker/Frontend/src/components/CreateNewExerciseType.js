import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "../CreateNewExercise.css";
import { createTypeOfExercise } from "../actions";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { LoadTypes } from "../reducers/exercisesTypes";

export default function CreateNewExerciseType() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [type, setType] = useState("");

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.oneerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleRoute = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/exercises/createNewExerciseType",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type }),
        }
      );
      const jsgMsg = await response.json();
      console.log("user", jsgMsg);
    } catch (error) {
      console.error(error);
    }
    dispatch(LoadTypes());

    navigate("/exercises");
  };

  const handleCreate = (e) => {
    const imgFiles = e.target.files[0];

    const newExerciseType = {
      type: type,
      id: Math.floor(Math.random() * 10000),
    };

    getBase64(imgFiles).then((base64) => {
      localStorage[type] = base64;
      console.debug("file stored", base64);
    });

    dispatch(createTypeOfExercise(newExerciseType));
  };

  return (
    <div>
      <h1 id="title">Create New Exercise Type</h1>
      <Form id="create-exercise-form">
        <Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add type to your new exercise"
            onChange={(e) => setType(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="img">Select Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleCreate} />
        </Form.Group>
        <Button variant="primary" type="sumbit" onClick={handleRoute}>
          Create
        </Button>
      </Form>
    </div>
  );
}
