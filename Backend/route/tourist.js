const Joi = require('joi');
const express = require("express");
const {  getAllTourist,  signupTourist,login} = require("../controller/auth")
// const validateSchema = require("../middleware/validateSchema")

const router = express.Router()


const loginSchema = Joi.object({
   
    email:Joi.string()
        . email()
        .required(),
   password: Joi.string()
    .required(),

});
router.post("/signuptourist",signupTourist);
router.post("/login",login);
router.get("/tourist",getAllTourist);


module.exports = router;