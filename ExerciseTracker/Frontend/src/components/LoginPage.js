import {React, Fragment} from 'react'
import {Form, Button} from "react-bootstrap"
import "../LoginPage.css"
import {Link} from "react-router-dom"


export default function LoginPage() {
    return (
        <Fragment>

            <Form id="login-form">
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button type="submit" class="btn mt-2 btn-primary">Login</Button>
                <Link to="/users/registration">Register</Link>
            </Form>
        </Fragment>
    )
}
