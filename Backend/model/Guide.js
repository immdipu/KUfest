const mongoose = require("mongoose")
const { MALE, FEMALE } = require("../constants/gender"); 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GuideSignupSchema = new Schema({
    full_name: {
        type: String,
        maxlength: 300,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            async validator(value) {
                const exists = await mongoose.models.Guide.findOne({ email: value });
                return !exists;
            },
            message: "Email already exists",
        },
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    contact:{
        type: Number,
        required: true,
    },
    Gender: {
        type: String,
    },
    date_Of_Birth:{
        type: Date

    },
    payment:{
        type: String
    },
    rate: {
        type: Number
    },
    language:{
        type: [String]
    },
    address: {
        type: String,
        required: true
    },
    Experience: {
        type: String,

    }
})

module.exports = mongoose.model("Guide", GuideSignupSchema) 
