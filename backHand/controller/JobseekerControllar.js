const  JobseekerService= require("../services/jobseekerServices");

const fetchJobs = async (req, res) => {
    console.log("fetchJobs called with body:", req.body);
    try {
        const result = await JobseekerService.fetchJobs(req.body);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const applyJob = async (req, res) => {
    const jobSeekerId = req.jobSeekerId; // Assuming the middleware sets this
    console.log("applyJob called with body:", "and jobSeekerId:", jobSeekerId);
    try {
        const result = await JobseekerService.applyJob(req.body, jobSeekerId);   //jobId,jobseekerId
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    fetchJobs,
    applyJob
}