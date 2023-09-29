const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    description: {
        type: String
    },
    images: {
        type: [String]
    },
    // Added ratings field
    ratings: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: Number
    }],
    reviews: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        comment: String,
        rating: Number
    }],
    posts: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        title: String,
        content: String,
        images: [String],
        date: {
            type: Date,
            default: Date.now
        }
    }],
    articles: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        title: String,
        content: String,
        images: [String],
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model("Place", PlaceSchema);
 