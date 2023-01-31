require('dotenv').config()
const initializeClient = require('../utils/whatsapp-client');
const whatsappScheduler = require('../utils/whatsapp-scheduler');
const client = returnClientFull();

let clientWhatsapp;
initializeClient().then((client) => {
  clientWhatsapp = client;
});

const sendAWhatsapp = async (receiver, message, date = undefined) => {
  const req = whatsappScheduler(
    clientWhatsapp,
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