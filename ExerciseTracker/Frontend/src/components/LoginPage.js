import {React, Fragment, useState} from 'react'
import {Form, Button} from "react-bootstrap"
import "../LoginPage.css"
import {Link, useNavigate} from "react-router-dom"


export default function LoginPage() {
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("")
    const navigate=useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();
        
        try {

            const body={
                email,
                password
            }

            const response=await fetch("http://localhost:5000/users/login", {
                method: "POST",
                withCredentials: true,
                headers: {"Content-Type": "application/json",
                            "Access-Control-Allow-Origin":"*",
                            "Access-Control-Allow-Methods":"GET, POST, OPT"
                    },
                body:JSON.stringify(body)
            })

            const json=await response.json()
            
            if(json.msg==="Invalid"){
                navigate("/users/login")
            }
            else
                navigate(`/users/user${json.user.user_id}`)
            


        } catch (error) {
            console.error(error)
        }
    }


    return (
        <Fragment>

            <Form id="login-form">
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
                </Form.Group>
                <Button type="submit" class="btn mt-2 btn-primary" onClick={handleClick}>Login</Button>
                <Link to="/users/registration">Register</Link>
            </Form>
        </Fragment>
    )
}
