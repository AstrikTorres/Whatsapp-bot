const express = require('express');
const router = express.Router();
const whatsappScheduledController = require('../controllers/whatsappScheduled.controller');

router.post('/', whatsappScheduledController.sendAWhatsapp);

module.exports = router;
