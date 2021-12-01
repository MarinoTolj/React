import { React, Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchUser } from "../actions";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const body = {
        email,
        password,
      };

      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPT",
        },
        body: JSON.stringify(body),
      });

      const jsonData = await response.json();
      console.log(jsonData);

      if (jsonData.jwtToken) {
        localStorage.setItem("token", jsonData.jwtToken);
        toast.success(jsonData.msg);
        dispatch(fetchUser(jsonData.id, jsonData.name));
        navigate(`/users/user${jsonData.id}`);
      } else {
        toast.error(jsonData.msg);
        navigate("/users/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <Form id="login-form">
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button
          type="submit"
          className="btn mt-2 btn-primary"
          onClick={handleClick}
        >
          Login
        </Button>
        <Link to="/users/registration">Register</Link>
      </Form>
    </Fragment>
  );
}
