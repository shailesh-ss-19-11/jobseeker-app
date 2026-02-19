const express = require("express");
const connectDb = require("./config/connectDB");

const authRoutes = require("./routes/authRoutes");
const employerRoutes  = require("./routes/employerRoutes");

const app = express();
const cors = require("cors");
const { port } = require("./config/constant");
const publicRoutes= require("./routes/publicRoutes");
const JobseekerRoutes = require("./routes/jobseekerRoutes");

const dotenv = require("dotenv").config();
connectDb();
app.use(express.json());
app.use(cors())

console.log(port);

app.get("/health-check", (req, res) => {
    res.send({ message: "ok" });
})

app.use("/app", publicRoutes);
app.use("/auth",authRoutes);
app.use("/employer",employerRoutes);
app.use("/jobseeker",JobseekerRoutes)

app.listen(port || 3000, () => console.log("listening on port " + port || 3000));

