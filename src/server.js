const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const routes = require("./routes");
const route = require("./routes");

const app = express();
const port = 8081;

app.use(express.static(path.join(__dirname, "public"))); //set path to use folder public

app.use(
  express.urlencoded({
    extended: true, //express indluded body-parser so indlude this line
  })
); //handler data get from form submit (work as middleware)

app.use(express.json()); //handler data get from js or (XMLHttpRequest, fetch, axios, ajax, ...)

// HTTP logger log the path/port the app is listening
// app.use(morgan("combined"));

// Template engine setup
app.engine(".hbs", engine({ extname: ".hbs" })); //set shorthand for handlers file for app to recognize
app.set("view engine", "hbs"); //set view as handlerbars (using handlebars as html or view part)
app.set("views", path.join(__dirname, "resources/views")); //set path to views folder (find the corresponding view and use it as view)
// console.log(path.join("Path: " + __dirname, "resources/views"));

// //Action --> Dispatcher --> function handler
// // Define routes
// app.get("/", (req, res) => {
//   res.render("home"); //render a html code (response) as view
// });

// app.get("/news", (req, res) => {
//   console.log("value: " + req.query.value); //req.query for param (param in URL)
//   res.render("news");
// });

// app.get("/search", (req, res) => {
//   res.render("search");
// });
// app.post("/search", (req, res) => {
//   console.log(req.body.value); //req.body for form data (form)
//   res.render("search");
// });
route(app);
//-------> routes/index/js

// Listen on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
