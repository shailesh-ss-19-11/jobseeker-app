const bcrypt = require("bcrypt");
const JobSeekerSignupModel = require("../models/JobSeekerSignupModel");
const { saltValue, jwt_secret } = require("../config/constant");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

const signupJobSeeker = async (body) => {
    const { password, confirmPassword } = body;
    if (!password && !confirmPassword) {
        throw new Error("please enter password and confirm password")
    } else if (password !== confirmPassword) {
        throw new Error("password and confirm password does not matched")
    }

    const saltRounds = Number(saltValue) || 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newBody = { ...body, password: hashedPassword }
    delete newBody.confirmPassword;
    const createdJobseeker = await JobSeekerSignupModel.create(newBody);
    return createdJobseeker;
}

const loginJobSeeker = async (body) => {
    const { email, phone, password } = body;

    if ((!email || !phone) && !password) {
        throw new Error("enter credentials");
    }

    let jobseeker;

    if (email) {
        jobseeker = await JobSeekerSignupModel.findOne({ email });
    } else if (phone) {
        jobseeker = await JobSeekerSignupModel.findOne({ phone });
    }

    const isMatch = await bcrypt.compare(password, jobseeker.password);
    if (!isMatch) {
        throw new Error("password does not match");
    }

    const token = jwt.sign({ id: jobseeker.id }, jwt_secret, { expiresIn: "1d" })
    console.log(jobseeker)
    // console.log(Object.values(jobseeker),"ooo");
    let newObj = {};
    for (let key of Object.keys(jobseeker.toObject())) {
        console.log(key);
        if (key != "password") {
            newObj = { ...newObj, [key]: jobseeker[key] };
        }
    }
    console.log(newObj);

    return {
        token,
        jobseeker: newObj
    }

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