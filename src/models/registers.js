const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    phone : {
        type: Number,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    cpassword : {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    typeOfDonar: {
        type: String
    },
    donationFrequency: {
        type: String
    },
    noOfDays: {
        type: Array
    },
    time: {
        type: String
    },
});

const Register = new mongoose.model("Register", schema);

module.exports = Register;