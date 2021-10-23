const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_USER
} = process.env

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
    const id = req.user.data.id
    const user = await api.post(`/users/logout`, { user_id: id })
        .then((result = user) => {
            res.status(200).json(result.data)
        })
        .catch((err) => {
            if (err.code === "ECONNREFUSED") {
                return res.status(500).json({ status: "error", message: "service unavailable" })
            }

            const { status, data } = err.response;
            return res.status(status).json(data)
        });
}