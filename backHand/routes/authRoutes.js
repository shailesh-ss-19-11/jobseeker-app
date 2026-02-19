const { signupJobSeeker, loginJobSeeker, signupEmployer, loginEmployer } = require("../controller/authControllar");

const authRoutes = require("express").Router();

authRoutes.post("/jobseeker/signup", signupJobSeeker)
authRoutes.post("/jobseeker/login", loginJobSeeker)

authRoutes.post("/employer/signup", signupEmployer)
authRoutes.post("/employer/login", loginEmployer)

module.exports = authRoutes;