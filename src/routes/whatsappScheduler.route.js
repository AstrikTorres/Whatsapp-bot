const express = require('express');
const router = express.Router();
const whatsappScheduledController = require('../controllers/whatsappScheduler.controller');

router.post('/send', whatsappScheduledController.send);
router.post('/schedule', whatsappScheduledController.shedule);

module.exports = router;
