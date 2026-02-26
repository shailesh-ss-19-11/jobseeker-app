const jwt = require("jsonwebtoken");
const { jwt_secret_jobseeker } = require("../config/constant");
const authJobSeekerMiddleWare = (req, res, next) => {
    // console.log(req.headers);
    if (!req.headers?.authorization) {
        return res.status(401).json({ error: "Unauthorized" });
    }


    const authHeader = req.headers?.authorization;
    console.log(authHeader, "authHeader");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, jwt_secret_jobseeker)
        console.log(payload, "payload");
        req.jobSeekerId = payload?.id;
        next();
    } catch (err) {
        return res.status(401).json({ error: "invalid or expired token" });
    }

}

module.exports = authJobSeekerMiddleWare;