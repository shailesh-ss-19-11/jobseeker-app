const bcrypt = require("bcrypt");
const JobSeekerSignupModel = require("../models/JobSeekerSignupModel");
const employeeSignupModel = require("../models/employerModel");
const { saltValue, jwt_secret_jobseeker, jwt_secret_employer } = require("../config/constant");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

const signupJobSeeker = async (body) => {
    // is there body - if else
    // password match if else 
    // hashing password 
    // saved in db 
    // return new creted User 





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
    // check in body email,password,phone if else
    // find user by email or phone in db 
    // finded user password and request body password is same or not 
    // if match return 
    // genrate token 
    // return new token 


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

    const token = jwt.sign({ id: jobseeker.id }, jwt_secret_jobseeker, { expiresIn: "1d" })
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

const signupEmployer = async (body) => {
    const { password, confirmPassword } = body;
    console.log(password, confirmPassword);
    if (!password && !confirmPassword) {
        throw new Error("please enter password and confirm password")
    }
    else if (password !== confirmPassword) {
        throw new Error("please enter equal passward and comfirmpassword ")
    }
    const saltRound = Number(saltValue) || 10;
    const hashedpassword = await bcrypt.hash(password, saltRound)
    console.log(hashedpassword);
    const newbody = { ...body, password: hashedpassword }
    console.log(newbody);
    delete newbody.confirmPassword;
    const createemployer = await employeeSignupModel.create(newbody);

    const obj = createemployer.toObject();
    delete obj.password;
    return obj;
}

const loginEmployer = async (body) => {
    const { email, phone, password } = body;
    if ((!email || !phone) && !password) {
        throw new Error("enter credentials");
    }
    let employer;
    if (email) {
        employer = await employeeSignupModel.findOne({ email });
    } else if (phone) {
        employer = await employeeSignupModel.findOne({ phone });
    }
    const isMatch = await bcrypt.compare(password, employer.password);
    if (!isMatch) {
        throw new Error("password does not match");
    }

    const token = jwt.sign({ id: employer.id }, jwt_secret_employer, { expiresIn: "1d" })
    let newObj = {};
    const newEmployer = employer.toObject();

    // {
    //     name: "shailesh",
    //     age: "23",
    //     email: "askdjhakdsh",
    //     password: "76543234567"
    // }

    for (let key of Object.keys(newEmployer)) { //name,age
        if (key != "password") {
            newObj = { ...newObj, [key]: employer[key] };
            // {name: "shailesh",}
        }
    }

    return {
        token,
        employer: newObj
    }
}

module.exports = {
    signupJobSeeker,
    loginJobSeeker,
    signupEmployer,
    loginEmployer,
}