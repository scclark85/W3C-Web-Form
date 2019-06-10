var express = require("express");
var app = express();

// Sets an initial port
const port = process.env.PORT || 3000

// Starts server
app.listen(port, () => {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
})