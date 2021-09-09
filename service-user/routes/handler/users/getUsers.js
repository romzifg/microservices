const { User } = require('../../../models');

module.exports = async (req, res) => {

    // inisialisasi query params
    const userIds = req.query.user_ids || [];

    const sqlOptions = {
        attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar']
    }

    // memfilter user berdasarkan id
    if (userIds.length) {
        sqlOptions.where = {
            id: userIds
        }
    }

    const users = await User.findAll(sqlOptions);

    return res.status(200).json({
        status: 'success',
        data: users
    })
}