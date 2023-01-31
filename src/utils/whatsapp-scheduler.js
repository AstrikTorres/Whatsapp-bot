const schedule = require('node-schedule');

const scheduledMessage = (clientWhatsapp, number, message, date) => {
  const chatId = number.substring(1) + '@c.us';

  const reqMessage = schedule.scheduleJob(date, async () => {
    await clientWhatsapp.sendMessage(chatId, message);
  });
  return reqMessage;
};

const sendMessage = async (clientWhatsapp, number, message) => {
  const chatId = number.substring(1) + '@c.us';
  const messageReq = await clientWhatsapp.sendMessage(chatId, message);
  return messageReq;
};

const whatsappScheduler = async (...args) => {
  const [clientWhatsapp, number, message, date] = args;
  const client = await clientWhatsapp.then((client) => client);
  if (date) {
    return scheduledMessage(client, number, message, date);
  }
  return sendMessage(client, number, message);
};

module.exports = whatsappScheduler;