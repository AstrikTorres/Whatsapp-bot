const client = require('./whatsapp-client');

client.initialize();

client.on('ready', async () => { 
  const number = '+5215566271843';
  const message = 'Hello world!';
  // To Chat id we have to delete "+" from the beginning and add "@c.us" at the end of the number.
  const chatId = number.substring(1) + '@c.us';

  const reqMessage = await client.sendMessage(chatId, message);
  console.log(reqMessage);
});