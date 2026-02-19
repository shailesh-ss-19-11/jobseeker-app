const { createJob, getJobById, updateJob, deleteJob,getCandidates } = require("../controller/employerControllar");
const authEmployerMiddleWare = require("../middleware/authEmployeeMiddleWare");

console.log("hello")
const employerRoutes = require("express").Router();

// employerRoutes.get("/test", authEmployerMiddleWare, deleteJob);
employerRoutes.post("/create-job", authEmployerMiddleWare, createJob);
employerRoutes.get("/get-job/:id", authEmployerMiddleWare, getJobById);
employerRoutes.put("/update-job", authEmployerMiddleWare, updateJob);
employerRoutes.delete("/delete-job", authEmployerMiddleWare, deleteJob);
employerRoutes.post("/get-candidates", authEmployerMiddleWare, getCandidates);

module.exports = employerRoutes