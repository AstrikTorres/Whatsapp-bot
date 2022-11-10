require('dotenv').config()
const client = require('../utils/whatsapp-client');
const whatsappScheduler = require('../utils/whatsapp-scheduler');

const sendAWhatsapp = async (receiver, message, date = undefined) => {
  const req = whatsappScheduler(
    client,
    receiver,
    message,
    date,
  );

  if (!date) {
    return req;
  }

  const whatsapp = {
    receiver,
    message,
    date,
    status: 'scheduled',
  }
  return whatsapp;
}

module.exports = sendAWhatsapp;