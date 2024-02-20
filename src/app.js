const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
require("./db/conn");
const Register = require("./models/registers");

app.use(express.json());
app.use(express.urlencoded({extended : false}));

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/index", (req, res) => {
    res.render("index")
});

app.get("/signup", (req, res) => {
    res.render("signup")
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.get("/forgotpassword", (req, res) => {
    res.render("forgotpassword")
});

app.get("/resetpassword", (req, res) => {
    res.render("resetpassword")
});

app.post("/signup", async (req, res) => {
    try {
        const registerProfile = new Register({
            name : req.body.name,
            email : req.body.email,
            username : req.body.username,
            phone : req.body.phone,
            password : req.body.password,
            cpassword : req.body.cpassword,
            address : req.body.address,
            city : req.body.city,
            district : req.body.district,
            state : req.body.state,
            pincode : req.body.pincode,
            country : req.body.country,
            typeOfDonar : req.body.typeOfDonar,
            donationFrequency : req.body.donationFrequency,
            noOfDays : req.body.noOfDays,
            time : req.body.time,
        });

        const registered = await registerProfile.save();
        console.log("Done!");
        // res.send("Account Registered. Please Log in!");
        // res.redirect("login");
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`server is running at ${port}`)
});
