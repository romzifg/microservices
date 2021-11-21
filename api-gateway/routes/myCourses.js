const express = require('express');
const router = express.Router();

const myCoursessHandler = require('./handler/my-courses');

router.post('/', myCoursessHandler.create);
router.get('/', myCoursessHandler.get);

module.exports = router;
