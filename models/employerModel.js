const mongoose = require("mongoose");
const roles = require("./RolesModel");

const employeeSignupModel = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    address: { type: String },
    companyName: { type: String, required: true },
    dob: { type: String },
    role: { type: mongoose.Schema.Types.ObjectId, ref: roles, required: true },
    password: { type: String, required: true },
},
)

module.exports = mongoose.model("employeeSignupModel", employeeSignupModel)