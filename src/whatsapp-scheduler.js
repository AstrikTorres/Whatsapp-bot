const schedule = require('node-schedule');

const whatsappScheduler = (clientWhatsapp, number, message, date) => {
  const chatId = number.substring(1) + '@c.us';

  const reqMessage = schedule.scheduleJob(date, async () => {
    await clientWhatsapp.sendMessage(chatId, message);
  });
  return reqMessage;
};

module.exports = whatsappScheduler;