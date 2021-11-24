const express = require("express");
const app = express();
const cors= require("cors");
const pool= require("./db");
const bcrypt= require("bcrypt")
const session= require("express-session");
const flash= require("express-flash");
const passport=require('passport')
const sessionStore   = new session.MemoryStore({ reapInterval: 60000 * 10 })
const initialize=require('./passportConfig')

initialize(passport)    

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret:"secret",
    'store' : sessionStore,
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
/* app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    next()
}) */

app.post("/users/registration", async (req, res) => {
    try {

        const {username, email, password, password2} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)

        if(password!=password2) {
            res.json({msg:"Password mismatch"})
        }

        else{
            const newuser=await pool.query("INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *;",[username, email, hashedPassword])

            req.flash("success_msg", "Great success!")
            res.json({msg:"success"})
        }
        

    } catch (error) {
        console.error("error:" + error.message)
        res.json({msg:"Email already in use"})
    }
})

/* app.post('/users/login', passport.authenticate("local", {
    successRedirect:"localhost:3000/home",
    failureRedirect:"localhost:3000/users/login",
    failureFlash:true
})) */
 

app.post("/userupdate", async (req, res)=>{
    try {
        const {id}=req.body
        const updateUser= await pool.query("INSERT INTO users_exercises (exercise_id, user_id) VALUES($1, 1)", [id])
        res.json({msg:"Success"})
    } catch (error) {
        console.error(error)
    }
})

app.post('/users/login', (req, res, next) => {

    passport.authenticate("local", (err, user, info)=>{
        console.log("User", user)
        if(err) throw error
        if(!user) res.json({"msg":"Invalid"})
        else{
            req.logIn(user, (err)=>{
                if(err) throw err
                res.json({"msg":"success",
                        "user": user
                    })
                
            })
        }
    })(req, res, next)
})

app.post("/exercises/createNewExerciseType", async(req, res, next)=>{
    try {
        const exerciseType=req.body.type
        console.log(exerciseType)
        const newType=await pool.query("INSERT INTO exercise_type (type) VALUES ($1);", [exerciseType])
        res.json({msg:"Success", user:req.user})

    } catch (error) {
        console.error(error)
    }
})

app.get("/exercises", async(req, res)=>{
    try {
        const types=await pool.query("SELECT * FROM exercise;")
        res.json(types.rows)
    } catch (error) {
        console.error(error)
    }
})

app.post("/exercises/createNewExercise", async(req, res)=>{
    try {
        
        const newExercise=await pool.query("INSERT INTO exercise (name, description, exercise_type_id) VALUES ($1, $2, $3);", [req.body.title, req.body.description, req.body.typeId])
        res.json({"msg":"success"})
    } catch (error) {
        console.error(error)
    }
})

app.get("/exercises/createNewExercise", async(req, res)=>{
    try {
        const exerciseTypes=await pool.query("SELECT * FROM exercise_type")
        res.json(exerciseTypes.rows)

    } catch (error) {
        console.error(error)
    }
})


app.get("/workoutExercises", async (req, res) => {
    try {
        const workoutExercises=await pool.query("SELECT * FROM users_exercises JOIN exercise ON exercise.exercise_id=users_exercises.exercise_id")
        console.log(workoutExercises.rows)
        res.json(workoutExercises.rows)
    } catch (error) {
        console.log(error)
    }
})

app.post("/exerciselist" ,async (req, res)=>{
    try {
        const exercises=await pool.query("SELECT * FROM exercise JOIN exercise_type ON exercise.exercise_type_id =exercise_type.exercise_type_id")
        console.log(exercises.rows)
        res.json(exercises.rows)
    } catch (error) {
        console.error(error)
    }
})

function chechAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return next()
    }
    res.json({msg:"Fail"})
}

app.listen(5000, ()=>{
     console.log("listening on port 5000")
})