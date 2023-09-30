const mongoose = require("mongoose")
const { MALE, FEMALE } = require("../constants/gender"); 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TouristSignupSchema = new Schema({
    fullName: {
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
    contactNumber:{
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date
    },

    country:{
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        // enum: [MALE, FEMALE],
        // set: function (value) {
        //     return value.toLowerCase()
        // }
    },
    numberOfVisitor: {
        type:Number
    },
    profilePic:{
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
    },
    about: {
        type : String,
    },
    language:{
        type: [String]
    },
    TermsAndConditions:{
        type: String,

    },

})

module.exports = mongoose.model("Tourist", TouristSignupSchema) 
