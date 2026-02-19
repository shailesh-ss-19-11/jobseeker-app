const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const { saltValue, jwt_secret_jobseeker, jwt_secret_employer } = require("../config/constant");
const JobSeekerSignupModel = require("../models/jobseekerSignUpModel");
const employerModel = require("../models/employeeSignupModel");
const jobseekerSignUpModel = require("../models/jobseekerSignUpModel");
const eventEmmiter = require("events");
const logsEmployerLogin = require("../models/logsEmployerLogin");
const eventE = new eventEmmiter();

const signupJobSeeker = async (body) => {

    console.log("📌 signupJobSeeker function called");
    console.log("📌 Incoming body:", body);

    // is there body - if else
    // password match if else 
    // hashing password 
    // saved in db 
    // return new created User 

    const { password, confirmPassword } = body;

    console.log("🔐 Password:", password);
    console.log("🔐 Confirm Password:", confirmPassword);

    if (!password && !confirmPassword) {
        console.log("❌ Password and Confirm Password missing");
        throw new Error("please enter password and confirm password");
    }
    else if (password !== confirmPassword) {
        console.log("❌ Password and Confirm Password do not match");
        throw new Error("password and confirm password does not matched");
    }

    console.log("✅ Password validation passed");

    const saltRounds = Number(saltValue) || 10;
    console.log("🧂 Salt Rounds:", saltRounds);

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("🔒 Hashed Password:", hashedPassword);

    const newBody = { ...body, password: hashedPassword };
    console.log("📦 New body before deleting confirmPassword:", newBody);

    delete newBody.confirmPassword;
    console.log("🗑 confirmPassword removed:", newBody);

    console.log("💾 Saving JobSeeker to database...");
    const createdJobseeker = await jobseekerSignUpModel.create(newBody);

    console.log("🗄 JobSeeker created successfully:", createdJobseeker);

    console.log("✅ Returning created JobSeeker");
    return createdJobseeker;
};


// check in body email,password,phone if else
// find user by email or phone in db 
// finded user password and request body password is same or not 
// if match return 
// genrate token 
// return new token 
const loginJobSeeker = async (body) => {

    console.log("📌 loginJobSeeker function called");
    console.log("📥 Incoming body:", body);

    const { identifier, password } = body;

    console.log("📧 Email:", identifier);
    console.log("🔐 Password:", password);

    if ((!identifier) && !password) {
        console.log("❌ Credentials missing");
        throw new Error("enter credentials");
    }

    let jobseeker;

    if (identifier.includes("@")) {
        console.log("🔍 Searching jobseeker by email...");
        jobseeker = await JobSeekerSignupModel.findOne({ email:identifier });
    }
    else if (phone) {
        console.log("🔍 Searching jobseeker by phone...");
        jobseeker = await JobSeekerSignupModel.findOne({ phone :identifier});
    }

    console.log("🗄 Jobseeker found:", jobseeker);

    if (!jobseeker) {
        console.log("❌ Jobseeker not found in database");
        throw new Error("jobseeker not found");
    }

    console.log("🔑 Comparing passwords...");
    const isMatch = await bcrypt.compare(password, jobseeker.password);

    console.log("🔍 Password match result:", isMatch);

    if (!isMatch) {
        console.log("❌ Password does not match");
        throw new Error("password does not match");
    }

    console.log("✅ Password verified successfully");

    const token = jwt.sign(
        { id: jobseeker.id },
        jwt_secret_jobseeker,
        { expiresIn: "1d" }
    );

    console.log("🎟 JWT Token generated:", token);

    let newObj = {};
    const jobseekerObj = jobseeker.toObject();

    console.log("📄 Converted jobseeker to object:", jobseekerObj);

    for (let key of Object.keys(jobseekerObj)) {
        console.log("🔑 Processing key:", key);

        if (key !== "password") {
            newObj = { ...newObj, [key]: jobseeker[key] };
        }
    }

    console.log("🧹 Final jobseeker object without password:", newObj);

    console.log("✅ Login successful, returning response");
    return {
        token,
        jobseeker: newObj
    };
};


const signupEmployer = async (body) => {
    console.log("📌 signupEmployer function called");
    console.log("📌 Incoming body:", body);

    const { password, confirmPassword } = body;

    console.log("🔐 Password:", password);
    console.log("🔐 Confirm Password:", confirmPassword);

    if (!password && !confirmPassword) {
        console.log("❌ Both password and confirmPassword are missing");
        throw new Error("please enter password and confirm password");
    }
    else if (password !== confirmPassword) {
        console.log("❌ Password and confirmPassword do not match");
        throw new Error("please enter equal password and confirmPassword");
    }

    console.log("✅ Password validation passed");

    const saltRound = Number(saltValue) || 10;
    console.log("🧂 Salt Rounds:", saltRound);

    const hashedpassword = await bcrypt.hash(password, saltRound);
    console.log("🔒 Hashed Password:", hashedpassword);

    const newbody = { ...body, password: hashedpassword };
    console.log("📦 New body before deleting confirmPassword:", newbody);

    delete newbody.confirmPassword;
    console.log("🗑 confirmPassword removed:", newbody);

    const createemployer = await employerModel.create(newbody);
    console.log("🗄 Employer created in DB:", createemployer);

    const obj = createemployer.toObject();
    console.log("📄 Converted to plain object:", obj);

    delete obj.password;
    console.log("🧹 Password removed from response object:", obj);

    console.log("✅ Returning final object");
    return obj;
};

const loginEmployer = async (body) => {

    console.log("📌 loginEmployer function called");
    console.log("📌 Incoming body:", body);

    const { identifier, password } = body;

    console.log("📧 Email:", identifier);
    console.log("🔐 Password:", password);

    if (!identifier && !password) {

        console.log("❌ Credentials missing");
        throw new Error("enter credentials");
    }
    let employer;

    if (identifier.includes("@")) {
        console.log("🔍 Searching employer by email...");
        employer = await employerModel.findOne({ email: identifier });
    } else {
        console.log("🔍 Searching employer by phone...");
        employer = await employerModel.findOne({ phone: identifier });
    }
    console.log("🗄 Employer found:", employer);
    if (!employer) {

        console.log("❌ Employer not found in database");
        throw new Error("Employer not found");
    }

    console.log("🔑 Comparing passwords...");
    const isMatch = await bcrypt.compare(password, employer.password);
    console.log("🔍 Password match result:", isMatch);

    if (!isMatch) {
        console.log("❌ Password does not match");
        throw new Error("password does not match");
    }

    console.log("✅ Password verified successfully");
    const token = jwt.sign(
        { id: employer.id },
        jwt_secret_employer,
        { expiresIn: "1d" });
    console.log("🎟 JWT Token generated:", token);

    let newObj = {};
    const newEmployer = employer.toObject();

    console.log("📄 Employer converted to object:", newEmployer);

    for (let key of Object.keys(newEmployer)) {
        if (key !== "password") {
            newObj = { ...newObj, [key]: employer[key] };
        }
    }

    console.log("🧹 Final employer object without password:", newObj);

    console.log("✅ Login successful, returning response");


    eventE.emit('login-user', newObj);

    return {
        token,
        employer: newObj
    };
};

eventE.on("login-user", async (employer) => {
    console.log("inside event", employer)
    const obj = { ...employer, timeOfLoginEmployer: new Date() };
    const newObj = { data: obj, eventName: 'login-user' }
    console.log(newObj)
    await logsEmployerLogin.create(newObj)
})



module.exports = {
    signupJobSeeker,
    loginJobSeeker,
    signupEmployer,
    loginEmployer,
}