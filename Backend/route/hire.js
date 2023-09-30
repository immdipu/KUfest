// const express = require('express');
// const router = express.Router();
// const hireController = require('../controller/hire');

// router.post('/hire', hireController.hireGuide);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const hireController = require('../controller/hire');

// // POST route to hire a guide
// router.post('/hireGuide', hireController.hireGuide);

// module.exports = router;

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

