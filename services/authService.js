const bcrypt = require("bcrypt");
const JobSeekerSignupModel = require("../models/JobSeekerSignupModel");
const { saltValue } = require("../config/constant");
const dotenv = require("dotenv").config();

const signupJobSeeker = async (body) => {
    const { password, confirmPassword } = body;
    if (!password && !confirmPassword) {
        throw new Error("please enter password and confirm password")
    } else if (password !== confirmPassword) {
        throw new Error("password and confirm password does not matched")
    }

    const saltRounds = Number(saltValue) || 10;
    const hashedPassword =await bcrypt.hash(password, saltRounds);
    const newBody = { ...body, password: hashedPassword }
    delete newBody.confirmPassword;
    const createdJobseeker = await JobSeekerSignupModel.create(newBody);
    return createdJobseeker;
}

const loginJobSeeker = async () => {

}

const signupEmployer = async () => {

}

const loginEmployer = async () => {

}

module.exports = {
    signupJobSeeker,
    loginJobSeeker,
    signupEmployer,
    loginEmployer,
}