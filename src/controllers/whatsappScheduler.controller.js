const whatsappService = require('../services/sheduler/whatsappScheduler.service');

async function send(req, res, next) {
  const { receiver, message } = req.body;
  try {
    const whatsapp = await whatsappService.send(receiver, message);
    res.status(201).json(whatsapp);
  } catch (error) {
    next(error);
  }
}

async function shedule(req, res, next) {
  const { receiver, message, date } = req.body;
  try {
    const whatsapp = await whatsappService.schedule(receiver, message, date);
    res.status(201).json(whatsapp);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  send,
  shedule
};