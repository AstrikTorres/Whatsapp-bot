const { Client, LocalAuth,  } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  puppeteer: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ]
  },

  authStrategy: new LocalAuth({
    clientId: 'My-bot',
  }),
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
  console.log('AUTHENTICATED');
});

client.on('ready', () => {
  console.log('READY');
});

client.initialize();

module.exports = client;