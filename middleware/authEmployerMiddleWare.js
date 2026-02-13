const jwt = require("jsonwebtoken");
const { jwt_secret_employer } = require("../config/constant");
const authEmployerMiddleWare = (req, res, next) => {
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
        const payload = jwt.verify(token, jwt_secret_employer)
        console.log(payload, "payload");
        req.employerId = payload?.id;
        next();
    } catch (err) {
        return res.status(401).json({ error: "invalid or expired token" });
    }

}

module.exports = authEmployerMiddleWare;