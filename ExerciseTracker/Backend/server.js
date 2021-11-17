const express = require("express");
const app = express();
const cors= require("cors");
const pool= require("./db");
const alert=require("alert");


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.post("/users/registration", async (req, res) => {
    try {

        const {username, email, password} = req.body
        const newuser=await pool.query("INSERT INTO users (username, email, password) VALUES($1, $2, $3);",[username, email, password])
        res.json(newuser)

    } catch (error) {
        console.error(error.message)
        alert("Error: " + error.message)
    }
})



app.get("/users/login", (req, res)=>{
    res.send("Hello")
})

 
app.listen(5000, ()=>{
    console.log("listening on port 5000")
})