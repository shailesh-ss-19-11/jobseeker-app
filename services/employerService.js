const JobPostModel = require("../models/JobPostModel");

const createJob = async (body) => {
    if (!body) {
        throw new Error("body is required");
    }

    const createdJob = await JobPostModel.create(body);
    return createdJob;
}

const updateJob = async(body) => {

}

const deleteJob = async(body) => {

}

const getJobById = async(body) => {

}

module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getJobById
}