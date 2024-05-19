require('dotenv').config()
const initializeClient = require('../client/clientEvents.service');
const nodeSchedule = require('node-schedule');

const client = initializeClient();

const send = async (receiver, message) => {
  const clientWhatsapp = await client.then((client) => client);
  const chatId = receiver.substring(1) + '@c.us';
  const messageReq = await clientWhatsapp.sendMessage(chatId, message);
  return messageReq;
}

const schedule = async (receiver, message, date) => {
  const clientWhatsapp = await client.then((client) => client);
  const chatId = receiver.substring(1) + '@c.us';
  let cron = new Date(date);
  nodeSchedule.scheduleJob(cron, () => {
    clientWhatsapp.sendMessage(chatId, message);
  });
  return {
    receiver,
    message,
    date,
    status: 'Scheduled'
  };
}

module.exports = {
  send,
  schedule
};