const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_USER
} = process.env

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
    const user = await api.post('/users/register', req.body)
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