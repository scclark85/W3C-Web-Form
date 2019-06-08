var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// Sets an initial port
const port = process.env.PORT || 3000

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
})

// app.get("/projects", (req, res) => {
//   var project1 = { Name: "James", Email: "random@random.com" }
//   var project2 = { Name: "Beth", Email: "random@random.com" }
//   res.json([project1, project2])
//   res.send("hello")
// })

// app.post("/project_create", (req, res) => {
//   console.log("creating new project submission...")
//   res.end()
// })

// Starts server
app.listen(port, () => {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
})