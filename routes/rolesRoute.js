const { getRoles } = require("../controller/RolesController");

const rolesRoutes = require("express").Router();

rolesRoutes.get("/v1/roles",getRoles);

module.exports = {
    rolesRoutes
}