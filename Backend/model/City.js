const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: {
        type: String,
        maxlength: 300,
        required: true
    },

    population: {
        type: Number
    },
    description: {
        type: String
    },
    attractions: [{
       type: String
    }],
    images: {
        type: [String]
    },
    video_links: {
        type: [String]
    },
    weather: {
        temperature: Number, // You can add more properties for weather info
        conditions: String
    },
    bestTimeToVisit: {
        type: String
    },
    visaRequirements: {
        type: String
    },
    localCuisine: {
        type: String
    }
});

module.exports = mongoose.model("City", CitySchema);
