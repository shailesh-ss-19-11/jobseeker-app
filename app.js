const express = require("express");
const connectDb = require("./config/connectDB");
const { rolesRoutes } = require("./routes/rolesRoute");
const authRoutes = require("./routes/authRoutes");
const { port } = require("./config/constant");
const app = express();
const dotenv = require("dotenv").config();
connectDb();
app.use(express.json());

console.log(port);

app.get("/health-check", (req, res) => {
    res.send({ message: "ok" });
})

app.use("/app",rolesRoutes);
app.use("/auth",authRoutes);

app.listen(port || 3000, () => console.log("listening on port " + port || 3000));

