const express = require('express');
const router = express.Router();
const placeController = require('../controller/places');
const cityController = require('../controller/city'); 


router.post('/places/:placeId/post', placeController.postAboutPlace);
router.post('/places', placeController.createPlace);
router.post('/cities/:cityId/places', cityController.createPlaceInCity);
router.get('/places', placeController.getPlaces);


module.exports = router;
