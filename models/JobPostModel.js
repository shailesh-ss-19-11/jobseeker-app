const { required } = require("joi");
const mongoose = require("mongoose");
const employerModel = require("./employerModel");

const jobPostModel = new mongoose.Schema({
    role: { type: String, required: true },
    jobName: { type: String, required: true },
    jobDecription: { type: String, required: true },
    jobExp: { type: String, required: true },
    skill: { type: String, required: true },
    package: { type: String },
    skillsMustHave: { type: String, required: true },
    employmentType: { type: String, required: true },
    education: { type: String, required: true },
    employerId: { type: mongoose.Schema.Types.ObjectId, ref: employerModel }
})

module.exports = mongoose.model("jobPost", jobPostModel);