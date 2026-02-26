const jobApplicationApplied = require("../models/jobApplicationApplied");
const JobPostModel = require("../models/JobPostModel");



const fetchJobs = async (body) => {
    try {
        let search = body?.skills
            .flatMap(skill => skill.split(','))
            .map(skill => skill.trim());

        console.log("Search Skills:", search);

        const jobs = await JobPostModel.find({
            skill: {
                $elemMatch: {
                    $regex: search.join('|'),
                    $options: 'i'
                }
            }
        })
            .populate({
                path: "employerId",
                select: "companyName email phone location" // choose fields you want
            });

        return jobs;

    } catch (error) {
        throw error;
    }
};

const applyJob = async (body, jobseekerId) => {
    try {
        const { jobId } = body;
        const job = await jobApplicationApplied.create({jobId, jobseekerId:jobseekerId, status: "applied" });
        return { message: "Job application successful", job };
    } catch (error) {
        throw error;
    }
}
module.exports = {
    fetchJobs,
    applyJob
}