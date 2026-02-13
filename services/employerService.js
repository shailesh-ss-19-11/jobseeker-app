const JobPostModel = require("../models/JobPostModel");

const createJob = async (body, employerId) => {
    if (!body) {
        throw new Error("body is required");
    }

    const newObj = { ...body, employerId };
    const createdJob = await JobPostModel.create(newObj);
    return createdJob;
}

const updateJob = async (body) => {

}

const deleteJob = async (body) => {

}

const getJobById = async (body) => {

}

module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getJobById
}