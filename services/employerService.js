const JobPostModel = require("../models/JobPostModel");

const createJob = async (body) => {
    if (!body) {
        throw new Error("body is required");
    }

    const createdJob = JobPostModel.create(body);
    return createdJob;
}

const updateJob = async => {

}

const deleteJob = async => {

}

const getJobById = async => {

}

module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getJobById
}