const jobseekerSignUpModel = require("../models/jobseekerSignUpModel");



const createJobseeker = async (body, jobseekerId) => {
    if (!body) {
        throw new Error("body is required");
    }

    const newObj = { ...body, jobseekerId };
    const createdJob = await jobseekerSignUpModel.create(newObj);
    return createdJob;
}

const updateJobseeker = async (body) => {
     if (!body) {
        throw new Error("body is required");
    }
    const { jobseekerId, ...updateData } = body;
    const updatedJobseeker = await jobseekerSignUpModel.findOneAndUpdate(
        { jobseekerId },
        updateData,
        { new: true }
    );
    return updatedJobseeker;

}

const deleteJobseeker = async (body) => {

}

const getJobByIdseeker = async (body) => {

}

module.exports = {
    createJobseeker,
    updateJobseeker,
    deleteJobseeker,
    getJobByIdseeker
}