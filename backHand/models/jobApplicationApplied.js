const mongoose = require('mongoose');
const jobseekerSignUpModel = require('./jobseekerSignUpModel');
const jobPostModel = require('./JobPostModel');

const jobApplicationAppliedSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: jobPostModel,
        required: true,
    },
    jobseekerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "jobseekerSignUpModel",
        required: true,
    },
    applicationDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['applied', 'under review', 'rejected', 'accepted'],
        default: 'applied',
    },
});

module.exports = mongoose.model('JobApplicationApplied', jobApplicationAppliedSchema);