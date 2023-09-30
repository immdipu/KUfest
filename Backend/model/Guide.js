const mongoose = require("mongoose")
const { MALE, FEMALE } = require("../constants/gender"); 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GuideSignupSchema = new Schema({
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
    language:{
        type: [String]
    },
    gender: {
        type: String,
    },
    tourType : {
        type: String,
    },
    termsAndConditions: {
        type: Boolean,

    },
    profilePic:{
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
    },
    about:{
        type: String,
    },
    paymentType:{
        type: String
    },
    rate: {
        type: Number
    },
    
    
    experience: {
        type: String,

    },
    // reviews: [{
    //     user: {
    //         type: Schema.Types.ObjectId,
    //         ref: 'User'
    //     },
    //     comment: String,
    //     rating: Number
    // }],
})

module.exports = mongoose.model("Guide", GuideSignupSchema) 
