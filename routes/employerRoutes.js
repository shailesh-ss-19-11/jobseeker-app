const { createJob, getJobById, updateJob, deleteJob } = require("../controller/employerController");
console.log("hello")
const employerRoutes = require("express").Router();

employerRoutes.get("/test", deleteJob);
employerRoutes.post("/create-job", createJob);
employerRoutes.get("/get-job/:id", getJobById);
employerRoutes.put("/update-job", updateJob);
employerRoutes.delete("/delete-job", deleteJob);

module.exports = employerRoutes