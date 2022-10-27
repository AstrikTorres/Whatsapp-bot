const client = require('./whatsapp-client');
const schedule = require('node-schedule');

client.initialize();

client.on('ready', async () => { 
  console.log('Client is ready!');
});

const date = new Date(2022, 9, 27, 3, 43, 0);

const scheduledMessage = schedule.scheduleJob(date, async () => {
  console.log('Sending message');
  const number = '+5215566271843';
  const message = 'Hello world!';
  // To Chat id we have to delete "+" from the beginning and add "@c.us" at the end of the number.
  const chatId = number.substring(1) + '@c.us';

  const reqMessage = await client.sendMessage(chatId, message);
  console.log(reqMessage);
});