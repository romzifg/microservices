const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_COURSE
} = process.env

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    const id = req.params.id
    const imageCourse = await api.delete(`/api/image-courses/${id}`)
        .then((result = imageCourse) => {
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