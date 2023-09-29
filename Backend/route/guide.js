const Joi = require('joi');
const express = require("express");
const {signupGuide, loginGuide} = require("../controller/auth")
// const validateSchema = require("../middleware/validateSchema")

const router = express.Router()


const loginSchema = Joi.object({
   
    email:Joi.string()
        . email()
        .required(),
   password: Joi.string()
    .required(),

});
router.post("/signupguide",signupGuide);
router.post("/loginguide",loginGuide);

module.exports = router;