var express = require("express");
var app = express();
var students = require('./db.json')

// Sets an initial port
const port = process.env.PORT || 3001

app.use(express.static('./public'));

app.post("/students", function (req, res) {
   res.json(students)
  });

// Starts server
app.listen(port, () => {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
})