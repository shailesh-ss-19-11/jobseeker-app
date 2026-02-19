const mongoose = require('mongoose');

const skillsModel = new mongoose.Schema({
    name: { type: String, required: true },
})

module.exports = mongoose.model("skills", skillsModel);