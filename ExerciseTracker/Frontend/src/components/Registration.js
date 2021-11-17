import {React, Fragment, useState} from 'react'
import {Form, Button} from "react-bootstrap"
import "../LoginPage.css"
import {Link, useNavigate} from "react-router-dom"
import "../Registration.css"

export default function Registration() {
    const [username, setUSername] =useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate()

    const handleRegistration=async e=>{

        e.preventDefault();

        try {
            const body={
                username,
                email,
                password
            }
    
            const response=await fetch("http://localhost:5000/users/registration",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(body),
            })
            console.log(response)
            navigate("/home")

        } catch (error) {
            console.error(error.massage)
            alert("Error: " + error.message)
        }
    }

    return (
        <Fragment>

        <Form id="registration-form">
            <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={username} onChange={(e)=>setUSername(e.target.value)} placeholder="Enter your name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
                </Form.Group>
                {/* <Form.Group>
                    <Form.Label>Confirm your password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group> */}
                <Button type="submit" class="btn m-2 btn-primary" onClick={handleRegistration}>Register</Button>
                <Link to="/users/login">Already registered?Login here</Link>
            </Form>
            
        </Fragment>
    )
}
