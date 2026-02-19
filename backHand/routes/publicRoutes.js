const { getRoles,getSkills } = require("../controller/PublicController");


const publicRoutes = require("express").Router();

publicRoutes.get("/v1/roles",getRoles);
publicRoutes.get("/v1/skills",getSkills);

module.exports = publicRoutes;