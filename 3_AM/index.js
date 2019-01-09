const express = require("express");
const path = require('path');
const app = express();
app.use(express.static('public'));
// app.use(express.static(__dirname + "/View"));
// app.use(express.static(__dirname + "/Script"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/oscarthegrouch", (req, res) => {
  res.sendFile(path.join(__dirname + "/oscarthegrouch.html"));
});

app.get("/bigbird", (req, res) => {
  res.sendFile(path.join(__dirname + "/bigbird.html"));
});

app.get("/cookiemonster", (req, res) => {
  res.sendFile(path.join(__dirname + "/cookiemonster.html"));
});
// app.get("/", (req, res) => {
//   res.sendFile("index.html");
// });

app.listen(3000);
console.log("Running at port 3000");
