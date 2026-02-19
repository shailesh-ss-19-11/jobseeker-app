const  JobseekerService= require("../services/jobseekerServices");
const createJobseeker = async (req, res) => {
    try {
        const result =await JobseekerService.createJobseeker(req.body,req.jobseekerId);
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateJobseeker = async(req,res) => {
    try {
        const result =await JobseekerService.updateJobseeker(req.body);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteJobseeker = async(req,res) => {
    try {
        // const result =await JobseekerService.deleteJobseeker(req.body);

        res.status(200).json({ res:"result" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getJobByIdseeker = async(req,res) => {
    try {
        const result =await JobseekerService.getJobByIdseeker(req.body);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createJobseeker,
    updateJobseeker,
    deleteJobseeker,
    getJobByIdseeker
}