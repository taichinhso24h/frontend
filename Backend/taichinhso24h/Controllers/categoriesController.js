var Mcategories = require('../Models/Mcategories');
const getOne = async (req, res) => {
    let params = {
        "id": req.params.id
    }
    var user = await Mcategories.findOne(params);
    res.json(user);
}
const getAll = async (req, res) => {
    var user = await Mcategories.findAll();
    res.json(user);
}
const createCategory = async (req, res) => {
    try {
        var user = await Mcategories.create(req.body);
        res.json(user);
    } catch (error) {
        res.json({ erMessage: error })
    }

}
module.exports = {
    getOne,
    getAll,
    createCategory
}