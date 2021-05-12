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
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

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
  const testName = req.body.username;
  const testPassword = req.body.password;

  if ( testPassword === users[testName]  ) {
    res.cookie("user",testName);
    res.redirect('/profile');
  } else {
    res.redirect('/login');
  }

});

// Registration Routes
app.get('/register',(req,res)=>{
  res.render("register");
});

// registeration submit handler
app.post("/register",(req,res)=>{
  console.log("req.body:",req.body);

  console.log("users before:",users);
  // const users = {'nally': "qwerty"};
  users[req.body.username] = req.body.password;
  console.log("users after:",users);

  res.send("Got it!");
  res.end();
});

// EDIT
app.get("/edit",(req,res)=>{
  const username = req.cookies.user;
  const password = users[username];
  res.render("edit", { password });
});

app.post("/edit", (req,res)=>{
  console.log("req.body:",req.body);

  const username = req.cookies.user;
  users[username] = req.body.password;
  res.send("done writing this part.");
});


// Profile Page
app.get('/profile',(req,res)=>{
  console.log("req.cookies:", req.cookies);

  if (users[req.cookies.user]){
    const secretMessage = "password: " + users[req.cookies.user];
    res.send(secretMessage);
  } else {
    res.redirect('/login');
  }

});

// Logout Route
app.get("/logout",(req,res)=>{
  res.clearCookie("user");
  res.redirect('/login');
});

app.listen(PORT,"localhost", ()=>{
  console.log(`Server is listening on port ${PORT}`);
});
