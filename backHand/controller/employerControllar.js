const employerService = require("../services/employerService");
const createJob = async (req, res) => {
    try {
        const result =await employerService.createJob(req.body,req.employerId);
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateJob = async(req,res) => {
    try {
        const result =await employerService.updateJob(req.body);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteJob = async(req,res) => {
    try {
        // const result =await employerService.deleteJob(req.body);

        res.status(200).json({ res:"result" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getJobById = async(req,res) => {
    try {
        const result =await employerService.getJobById(req.body);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCandidates = async(req,res) => {
    try {
        const result =await employerService.getCandidates(req.body);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const fetchEmployerJobPosts = async(req,res) => {
    const employerId = req.employerId;
    try {
        const result =await employerService.fetchEmployerJobPosts(employerId);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getJobById,
    getCandidates,
    fetchEmployerJobPosts
}