const { fetchJobs } = require("../controller/JobseekerControllar");
const authEmployerMiddleWare = require("../middleware/authEmployeeMiddleWare");

console.log("hello")
const JobseekerRoutes = require("express").Router();

JobseekerRoutes.post("/fetch-jobs", fetchJobs);

module.exports = JobseekerRoutes