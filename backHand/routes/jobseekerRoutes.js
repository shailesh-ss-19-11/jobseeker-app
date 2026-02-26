const { fetchJobs, applyJob } = require("../controller/JobseekerControllar");
const authJobSeekerMiddleWare = require("../middleware/authJobSeekerMiddleWare");

const JobseekerRoutes = require("express").Router();

JobseekerRoutes.post("/fetch-jobs",authJobSeekerMiddleWare, fetchJobs);
JobseekerRoutes.post("/apply-job", authJobSeekerMiddleWare, applyJob);

module.exports = JobseekerRoutes

