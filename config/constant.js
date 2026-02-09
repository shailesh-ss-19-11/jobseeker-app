const dotenv = require("dotenv").config();
const port = process.env.PORT;
const host = process.env.HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const saltValue = process.env.SALT_ROUNDS
const jwt_secret_jobseeker = process.env.JWT_SECRET_JOBSEEKER
const jwt_secret_employer = process.env.JWT_SECRET_EMPLOYER
module.exports = {
    port,
    host,
    DB_PORT,
    DB_NAME,
    saltValue,
    jwt_secret_jobseeker,
    jwt_secret_employer
}