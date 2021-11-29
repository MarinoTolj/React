import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar({ id }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Exercise Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="respnsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/exercises">Exercises</Nav.Link>
            <Nav.Link href={`/users/user${id}`}>Your Workouts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
