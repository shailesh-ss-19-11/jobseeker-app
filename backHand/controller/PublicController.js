const { getRoleService, getSkillsService } = require("../services/rolesService")

const getRoles = async (req, res) => {
    try{
        const roles = await getRoleService();
        res.status(200).json(roles);
    }catch(err){
        res.status(500).json([]);
    }
}
const getSkills = async (req, res) => {
    try{
        const skills = await getSkillsService();
        res.status(200).json(skills);
    }catch(err){
        res.status(500).json([]);
    }
}

module.exports = {
    getRoles,
    getSkills
}