const RolesModel = require("../models/RolesModel")

const getRoleService = async ()=>{
    return await RolesModel.find();
}

module.exports = {
    getRoleService
}