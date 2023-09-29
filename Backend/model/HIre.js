const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HireSchema = new Schema({
    tourist: {
        type: Schema.Types.ObjectId,
        ref: 'Tourist',
        required: true
    },
    guide: {
        type: Schema.Types.ObjectId,
        ref: 'Guide',
        required: true
    },
    hireDate: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model("Hire", HireSchema);
