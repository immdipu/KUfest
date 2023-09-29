const express = require('express');
const router = express.Router();
const hireController = require('../controller/hire');

router.post('/hire', hireController.hireGuide);

module.exports = router;
