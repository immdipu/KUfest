const Tourist = require("../model/Tourist");
const Guide = require("../model/Guide");

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { MALE, FEMALE } = require("../constants/gender"); 

const signupTourist = async (req, res, next) => {
    try {
        const hash_pw = await bcrypt.hash(req.body.password, 10);
        const user = await Tourist.create({ 
            ...req.body,
            password: hash_pw
        });
        res.send(user);
    } catch (err) {
        next(err);
    }
};
const signupGuide = async (req, res, next) => {
    try {
        const hash_pw = await bcrypt.hash(req.body.password, 10);
        
        const user = await Guide.create({ 
            ...req.body,
            password: hash_pw 
        });
        const obj = { ...user.toObject() };
        const token = jwt.sign(obj, 'fallback_secret_key')
        delete obj.password;
        res.send({...obj, token});
    } catch (err) {
        next(err);
    }
};

const login = async (req, res,next) => {
    const { email, password } = req.body;

    try {
        let user = await Tourist.findOne({ email });

        if (!user) {
            user = await Guide.findOne({ email });
        }

        if (user) {
            const status = await bcrypt.compare(password, user.password);
            if (status) {
                const obj = { ...user.toObject() };
                const token = jwt.sign(obj, 'fallback_secret_key')
                delete obj.password;

                res.send({...obj, token});
            }
        }

        return res.status(401).send({ msg: "unauthenticated" });
    } catch (err) {
        next(err);
    }
};
const getAllGuide = (async(req, res, next) => {
    
    try {
        const guide = await Guide.find();
        res.status(200).json({ success: true, data: guide });
    } catch (error) {
        next(error);
    }
   
 })

 const getAllTourist = (async(req, res, next) => {
    
    try {
        const tourist = await Tourist.find();
        res.status(200).json({ success: true, data: tourist });
    } catch (error) {
        next(error);
    }
   
 })

module.exports = {
    signupTourist,
    signupGuide,
    login,
    getAllGuide,
    getAllTourist,
};
