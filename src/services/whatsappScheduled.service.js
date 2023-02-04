require('dotenv').config()
const initializeClient = require('../utils/whatsapp-client-events');
const whatsappScheduler = require('../utils/whatsapp-scheduler');
const client = initializeClient();

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