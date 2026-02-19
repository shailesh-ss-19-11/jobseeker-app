const RolesModel = require("../models/RolesModel");
const skillsModel = require("../models/skillsModel");

const getRoleService = async ()=>{
    return await RolesModel.find();
}
const getSkillsService = async ()=>{
    return await skillsModel.find();
}

module.exports = {
    getRoleService,
    getSkillsService
}