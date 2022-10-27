const { Client, LocalAuth,  } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: 'My-bot',
  }),
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
  console.log('Client is ready!');
  
  const number = '+525566271843';
  const message = 'Hello world!';
  // To Chat id we have to delete "+" from the beginning and add "@c.us" at the end of the number.
  const chatId = number.substring(1) + '@c.us';

  const reqMessage = await client.sendMessage(chatId, message);
  console.log(reqMessage);
});

client.on('authenticated', () => {
  console.log('AUTHENTICATED');
});

client.initialize();