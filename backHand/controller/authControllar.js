const authService = require("../services/authService");

const signupJobSeeker = async (req, res) => {
    try {
        // add service 
        const result = await authService.signupJobSeeker(req.body);
        res.status(201).json({ message: "signup success", result })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const loginJobSeeker = async (req, res) => {
    try {
        const body = req.body;
        // add service 
        const result = await authService.loginJobSeeker(req.body);
        res.status(200).json({ message: "Login Success", user: result })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const signupEmployer = async (req, res) => {
    try {
        const body = req.body;
        console.log(body)
        // add service 
        const result = await authService.signupEmployer(req.body);
        console.log(result)
        res.status(201).json({ message: "signup success", user: result })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const loginEmployer = async (req, res) => {
    try {
        const body = req.body;
        // add service 
        const result = await authService.loginEmployer(req.body);
        res.status(200).json({ message: "login success", user: result })
    } catch (error) {
        res.status(500).json({ message: "login failed", user: {} })
    }
}
module.exports = {
    signupJobSeeker,
    loginJobSeeker,
    signupEmployer,
    loginEmployer
}