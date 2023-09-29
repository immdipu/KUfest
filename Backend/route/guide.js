const Joi = require('joi');
const express = require("express");
const {signupGuide, loginGuide, getAllGuide} = require("../controller/auth")
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
router.get("/guide",getAllGuide);


module.exports = router;