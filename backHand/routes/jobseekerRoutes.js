const { createJobseeker, getJobByIdseeker, updateJobseeker, deleteJobseeker } = require("../controller/JobseekerControllar");
const authEmployerMiddleWare = require("../middleware/authEmployeeMiddleWare");

console.log("hello")
const JobseekerRoutes = require("express").Router();

// employerRoutes.get("/test", authEmployerMiddleWare, deleteJob);
JobseekerRoutes.post("/create-job", authEmployerMiddleWare, createJobseeker);
JobseekerRoutes.get("/get-job/:id", authEmployerMiddleWare, getJobByIdseeker);
JobseekerRoutes.put("/update-job", authEmployerMiddleWare, updateJobseeker);
JobseekerRoutes.delete("/delete-job", authEmployerMiddleWare, deleteJobseeker);

module.exports = JobseekerRoutes