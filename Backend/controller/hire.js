// pages/api/hire.js
const Hire = require('../model/HIre');

module.exports = async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { touristId, guideId, additionalInfo } = req.body;

      const hire = await Hire.create({
        tourist: touristId,
        guide: guideId,
        ...additionalInfo
      });

      res.status(201).json({ success: true, data: hire });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
