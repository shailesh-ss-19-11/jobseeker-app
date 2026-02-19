const mongoose = require("mongoose");

const logsEmployerLogin = new mongoose.Schema({
    eventName: { type: String },
    data: { type: mongoose.Schema.Types.Mixed }
})

module.exports = mongoose.model("loginLogs",logsEmployerLogin);