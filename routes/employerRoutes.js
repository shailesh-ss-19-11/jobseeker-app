const { createJob, getJobById, updateJob, deleteJob } = require("../controller/employerController");
const authEmployerMiddleWare = require("../middleware/authEmployerMiddleWare");
console.log("hello")
const employerRoutes = require("express").Router();

// employerRoutes.get("/test", authEmployerMiddleWare, deleteJob);
employerRoutes.post("/create-job", authEmployerMiddleWare, createJob);
employerRoutes.get("/get-job/:id", authEmployerMiddleWare, getJobById);
employerRoutes.put("/update-job", authEmployerMiddleWare, updateJob);
employerRoutes.delete("/delete-job", authEmployerMiddleWare, deleteJob);

module.exports = employerRoutes