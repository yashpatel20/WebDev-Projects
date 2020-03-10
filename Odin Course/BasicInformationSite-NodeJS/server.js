const express = require("express");
const fs = require("fs");

const app = express();
app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./about.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});
app.get("/contact-me", (req, res) => {
  fs.readFile("./contact-me.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.listen(8080);
