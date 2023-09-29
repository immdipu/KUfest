const mongoose = require("mongoose")
const { MALE, FEMALE } = require("../constants/gender"); 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TouristSignupSchema = new Schema({
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
                const exists = await mongoose.models.Tourist.findOne({ email: value });
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
    country:{
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        enum: [MALE, FEMALE],
        set: function (value) {
            return value.toLowerCase()
        }
    },
    language:{
        type: [String]
    }
})

module.exports = mongoose.model("Tourist", TouristSignupSchema) 
