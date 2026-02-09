const employerService = require("./../services/employerService");
const createJob = async (req, res) => {
    try {
        const result = employerService.createJob(req.body);
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateJob = async => {
    try {
        const result = employerService.updateJob(req.body);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteJob = async => {
    try {
        const result = employerService.deleteJob(req.body);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getJobById = async => {
    try {
        const result = employerService.getJobById(req.body);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getJobById
}