import { React, Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import "../Registration.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchUser } from "../actions";

export default function Registration() {
  const [username, setUSername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const body = {
        username,
        email,
        password,
        password2,
      };

      const response = await fetch("http://localhost:5000/users/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const jsonData = await response.json();
      console.log(jsonData);

      if (jsonData.jwtToken) {
        localStorage.setItem("token", jsonData.jwtToken);
        dispatch(fetchUser(jsonData.id, jsonData.name));
        toast.success("Successfull registration");
      }
      navigate(`/users/user${jsonData.id}`);
    } catch (error) {
      console.error(error.massage);
      alert("Error: " + error.message);
    }
  };

  return (
    <Fragment>
      <Form id="registration-form">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUSername(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm your password</Form.Label>
          <Form.Control
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <Button
          type="submit"
          className="btn m-2 btn-primary"
          onClick={handleRegistration}
        >
          Register
        </Button>
        <Link to="/users/login">Already registered?Login here</Link>
      </Form>
    </Fragment>
  );
}
