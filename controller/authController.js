const authService = require("./../services/authService");

const signupJobSeeker = async (req, res) => {
    try {
        // add service 
        const result = await authService.signupJobSeeker(req.body);
        delete result.password;
        console.log(result)
        res.status(201).json({ message: "signup success", result })
    } catch (error) {
        res.status(500).json({ message: error.message, user: {} })
    }
}

const loginJobSeeker = async (req, res) => {
    try {
        const body = req.body;
        // add service 
        const result = await authService.loginJobSeeker(req.body);
        res.status(201).json({ message: "signup success", user: result })
    } catch (error) {
        res.status(500).json({ message: "signup failed", user: {} })
    }
}

const signupEmployer = async (req, res) => {
    try {
        const body = req.body;
        // add service 
        const result = await authService.signupEmployer(req.body);
        res.status(201).json({ message: "signup success", user: result })
    } catch (error) {
        res.status(500).json({ message: "signup failed", user: {} })
    }
}

const loginEmployer = async (req, res) => {
    try {
        const body = req.body;
        // add service 
        const result =await authService.loginEmployer(req.body);
        res.status(201).json({ message: "signup success", user: result })
    } catch (error) {
        res.status(500).json({ message: "signup failed", user: {} })
    }
}
module.exports = {
    signupJobSeeker,
    loginJobSeeker,
    signupEmployer,
    loginEmployer
}