// setting up the required routes

const express = require('express')
const app = express()

app.use(express.json());

let ADMINS = []
let USERS = []
let COURSES = []

//functions for authentication


const adminAuthentication = (req, res, next) => {
    const { username, password } = req.headers;
    console.log("control reaches here")
    console.log(username)
    console.log(password);
    const admin = ADMINS.find(a => a.username === username && a.password === password);
    if (admin) {
        next();
    } else {
        res.status(403).json({ message: 'Admin authentication failed' });
    }
};





//Setting up admin routes

app.post('/admin/signup', (req, res) => {
    const admin = req.body;
    const existingAdmin = ADMINS.find(a => a.username === admin.username);
    if (existingAdmin) {
        res.status(403).json({ message: 'Admin already exists' });
    } else {
        ADMINS.push(admin);
        res.json({ message: 'Admin created successfully' });
    }
});



app.post('/admin/login', adminAuthentication, (req, res) => {
    res.json({ message: "Admin login successfully" });
});

app.post('/admin/courses', adminAuthentication, (req, res) => {
    //route for create courses
    const course = req.body;

    course.id = Date();
    COURSES.push(course);
    res.json({ message: "Course created successfully!", courseId: course.id });

});




app.put('/admin/courses/:courseid', (req, res) => {
    //route for updating courses
})



app.get('/admin/courses', (req, res) => {

})



app.post('/users/signup', (req, res) => {
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