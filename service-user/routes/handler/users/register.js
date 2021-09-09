const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
        name: 'string|empty:false',
        email: 'email|empty:false',
        password: 'string|min:8',
        profession: 'string|optional'
    }

    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({ status: 'error', message: 'validate' })
    }

    // memeriksa email apakah sudah terdaftar atau belum
    const user = await User.findOne({
        where: { email: req.body.email }
    });

    if (user) {
        return res.status(409).json({
            status: 'error',
            message: 'this email already exist'
        })
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const data = {
        name: req.body.name,
        password,
        email: req.body.email,
        profession: req.body.profession,
        role: 'student'
    };

    const createUser = await User.create(data)
        .then((result = createUser) => {
            res.status(200).json({
                status: 'success',
                data: {
                    id: result.id
                }
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: 'error',
                message: err
            })
        });
}