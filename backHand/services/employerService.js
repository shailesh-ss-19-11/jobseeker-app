const jobPostModel = require("../models/JobPostModel");
const jobseekerSignUpModel = require("../models/jobseekerSignUpModel");


const createJob = async (body, employerId) => {
    if (!body) {
        throw new Error("body is required");
    }

    const newObj = { ...body, employerId };
    const createdJob = await jobPostModel.create(newObj);
    return createdJob;
}

const updateJob = async (body) => {

}

const deleteJob = async (body) => {

}

const getJobById = async (body) => {

}

const getCandidates = async (body) => {
  try {
    const search = body.skills;

    const candidates = await jobseekerSignUpModel.find({
      skills: { $regex: search, $options: "i" } // case-insensitive
    });

    return candidates;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getJobById,
    getCandidates
}