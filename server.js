var express = require("express");
var app = express();
//var upload = require("express-fileupload");

// Sets an initial port
const port = process.env.PORT || 3000

//app.use(upload())
app.use(express.static('./public'));

// Starts server
app.listen(port, () => {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
})