const mongoose = require("mongoose");
const roles = new mongoose.Schema({
    role: { type: String, required: true }
}, { timestamps: true })


module.exports= mongoose.model("role",roles);