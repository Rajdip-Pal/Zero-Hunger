const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
require("./db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/signup", (req, res) => {
    res.render("signup")
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.listen(port, () => {
    console.log(`server is running at ${port}`)
});