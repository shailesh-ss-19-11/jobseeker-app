const mongoose = require("mongoose");
const { host, DB_PORT, DB_NAME } = require("./constant");

async function connectDb() {
    console.log(host, DB_PORT, DB_NAME)
    try {
        // await mongoose.connect("mongodb://localhost:27017/job-seeker")
        await mongoose.connect(`mongodb://${host}:${DB_PORT}/${DB_NAME}`)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;