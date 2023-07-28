// setting up the required routes

const express = require('express')
const app = express()

app.use(express.json);

let ADMIN = []
let USERS = []
let COURSES = []


//Setting up admin routes

app.post('/admin/signup', (req, res) => {
    //route for sign up
})



app.post('/admin/login', (req, res) => {
    //route for create courses
})



app.post('/admin/courses', (req, res) => {
    //route for create courses
})




app.put('/admin/courses/:courseid', (req, res) => {
    //route for updating courses
})



app.get('/admin/courses', (req, res) => {
    res.send()
})



app.post('/admin/signup', (req, res) => {
    //route for sign up
})



//users route


app.post('/users/signup', (req, res) => {
    // user sign up
})

app.post('/users/login', (req, res) => {
    // users login
})

app.get('/users/courses', (req, res) => {
    // route to get all courses
})

app.post('/users/courses/:courseId', (req, res) => {
    // route to purchase courses
})

app.get('/users/purchasedCourses', (req, res) => {
    // route to get purchased courses
})


const port = 3000;
app.listen({ port }, () => {
    console.log("Server is running on port 3000")
})