require('dotenv').config()
const client = require('./whatsapp-client');
const whatsappScheduler = require('./whatsapp-scheduler');

client.initialize();
client.on('ready', async () => { 
  console.log('Client is ready!');
  const reqWhatsapp = whatsappScheduler(
    client,
    process.env.NUMBER_TEST,
    'Hello World!',
    new Date(Date.now() + 5000));
  
  console.log(reqWhatsapp);
});