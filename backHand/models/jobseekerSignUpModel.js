const mongoose = require("mongoose");
const roles = require("./RolesModel");

const jobSeekerModel = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    phone: { type: String, unique: true, required: true, },
    email: { type: String, unique: true, required: true },
    expectedSalary: { type: String, required: true },
    currentSalary: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    skills: { type: Array, required: true },
    education: { type: String, required: true },

    role: { type: mongoose.Schema.Types.ObjectId, required: true, ref: roles },
})

module.exports = mongoose.model("jobSeeker", jobSeekerModel);