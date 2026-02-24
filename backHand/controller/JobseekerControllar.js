const  JobseekerService= require("../services/jobseekerServices");

const fetchJobs = async (req, res) => {
    try {
        const result = await JobseekerService.fetchJobs(req.body);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    fetchJobs
}