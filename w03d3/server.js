const express = require("express");
const PORT = 8082;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine","ejs");


//
// Users Data
//

const users = {'nally': "qwerty"};

//
// Middleware
//

// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(cookieParser());

//
// Routes
//

app.get('/',(req,res)=>{
  res.render('homepage');
});

// Login Routes

app.get('/login',(req,res)=>{
  res.render("login");
});

// login submit handler
app.post("/login",(req,res)=>{

// ... code goes here.

});

// Registration Routes

app.get('/register',(req,res)=>{
  res.render("register");
});

// registeration submit handler
app.post("/register",(req,res)=>{

// ... code goes here ...

});


// Profile Page
app.get('/profile',(req,res)=>{

  // ... code goes here ...

});

// Logout Route
app.get("/logout",(req,res)=>{

  // ... code goes here ...

});

app.listen(PORT,"localhost", ()=>{
  console.log(`Server is listening on port ${PORT}`);
});
