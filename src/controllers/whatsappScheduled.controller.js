const whatsappScheduled = require('../services/whatsappScheduled.service');

async function sendAWhatsapp(req, res, next) {
  const { receiver, message, date } = req.body;
  try {
    const whatsapp = await whatsappScheduled(receiver, message, date);
    res.status(201).json(whatsapp);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  sendAWhatsapp,
};