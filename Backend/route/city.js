const express = require('express');
const router = express.Router();
const cityController = require('../controller/city');

router.post('/cities', cityController.createCity);
router.get('/cities', cityController.getCities);


module.exports = router;
