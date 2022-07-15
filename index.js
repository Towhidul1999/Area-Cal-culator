const express = require("express");
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 2000;


app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
});

app.get("/circle", (req, res) => {
    res.sendFile(__dirname + "/Circle.html")
});

app.get("/triangle", (req, res) => {
    res.sendFile(__dirname + "/Triangle.html")
});

app.post("/circle", (req, res) => {
    const radius = req.body.radius;
    const area = 3.1416 * radius * radius;
    res.send(`<h2>Area of circle: ${area}</h2>`)
});

app.post("/triangle", (req, res) => {
    const base = req.body.base;
    const height = req.body.height;
    const area = 0.5 * base * height;
    res.send(`<h2>Area of Triangle: ${area}</h2>`)
});

app.listen(PORT, () =>{
    console.log(`Serve is running at http://localhost:${PORT}`);
});