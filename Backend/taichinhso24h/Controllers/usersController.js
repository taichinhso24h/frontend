var Musers = require('../Models/Musers');
const login = async (req, res) => {
    let params = {
        username: req.body.username,
        password: req.body.password,
    }
    var checkExists = await Musers.count(params);
    if (checkExists > 0) {
        try {
            var user = await Musers.findOne(params);
            // console.log('req::>>', req.body);
            // console.log('res::>>', res);
            var result = {
                data: user,
                status: res.statusCode
            }
            res.json(result);
        } catch (error) {
            res.json({ erMessage: error.toString() })
        }
    } else {
        var result = {
            error: 'Không tìm thấy dữ liệu cập nhật',
            status: res.statusCode
        }
        res.json(result);
    }
}

const getOne = async (req, res) => {
    let params = {
        "id": req.params.id
    }
    var user = await Musers.findOne(params);
    res.json(user);
}
const getAll = async (req, res) => {
    var user = await Musers.findAll();
    res.json(user);
}
const create = async (req, res) => {
    try {
        var user = await Musers.create(req.body);
        res.json(user);
    } catch (error) {
        res.json({ erMessage: error.toString() })
    }
}
const update = async (req, res) => {
    let params = {
        id: req.body.id
    }
    var checkExists = await Musers.count(params);
    console.log('checkExists::', req.body, "", checkExists);
    if (checkExists > 0) {
        try {
            var user = await Musers.update(params, req.body);
            console.log('product::', user);
            res.json(user);
        } catch (error) {
            res.json({ erMessage: error.toString() })
        }
    } else {
        res.json('Không tìm thấy dữ liệu cập nhật');
    }
}
const remove = async (req, res) => {
    let params = {
        id: req.body.id
    }
    try {
        await Musers.remove(params);
        var user = await Musers.findAll();
        res.json(user);
    } catch (error) {
        res.json({ erMessage: error.toString() })
    }
}
module.exports = {
    login,
    getOne,
    getAll,
    create,
    update,
    remove,
}