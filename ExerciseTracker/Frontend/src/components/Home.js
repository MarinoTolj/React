import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "../Home.css";

export default function Home({ id }) {
  return (
    <Container id="home-container">
      <h1 className="home-items">Welcome to ExerciseTracker</h1>
      <Link className="home-items" to="/users/login">
        <Button>Login</Button>
      </Link>
      <Link className="home-items" to="/users/registration">
        <Button>Register</Button>
      </Link>
      <Link className="home-items" to={`/users/user${id}`}>
        <Button type="submit">Your Workouts</Button>
      </Link>
    </Container>
  );
}
