const Joi = require('joi');
const express = require("express");
const {signupGuide, login, getAllGuide} = require("../controller/auth")
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
router.post("/login",login);
router.get("/guide",getAllGuide);


module.exports = router;