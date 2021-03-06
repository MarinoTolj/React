import React from "react";
import Workout from "./Workout";
import { Table, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../Table.css";

export default function WorkoutList({ userId }) {
  const workoutExercises = useSelector(
    (state) => state.workoutExercises.exercises
  );
  console.log(workoutExercises);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={8}>
          <Row>
            <Table striped bordered size="sm" id="table">
              <tbody>
                {workoutExercises.map((item, index) => (
                  <Workout key={index} workoutExercise={item} userId={userId} />
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
  );
}
