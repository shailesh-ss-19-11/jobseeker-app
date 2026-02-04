const express = require("express");
const connectDb = require("./config/connectDB");
const { rolesRoutes } = require("./routes/rolesRoute");
const authRoutes = require("./routes/authRoutes");
const app = express();
const dotenv = require("dotenv").config();
connectDb();
app.use(express.json());
const port = process.env.PORT;

console.log(port);

app.get("/health-check", (req, res) => {
    res.send({ message: "ok" });
})

app.use("/app",rolesRoutes);
app.use("/auth",authRoutes);

app.listen(3000, () => console.log("listening on port " + 3000));

