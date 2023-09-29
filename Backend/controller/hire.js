const Hire = require("../model/HIre");

const hireGuide = async (req, res, next) => {
    try {
        const { touristId, guideId, additionalInfo } = req.body;

        const hire = await Hire.create({ 
            tourist: touristId,
            guide: guideId,
            ...additionalInfo
        });

        res.status(201).json({ success: true, data: hire });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    hireGuide
};
