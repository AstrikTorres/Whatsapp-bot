require("dotenv").config();
const qrcode = require('qrcode-terminal');
const returnClient = require('../utils/whatsapp-client');

const returnClientFull = async () => {
  return returnClient().then((client) => {
    
    client.on('qr', (qr) => {
      qrcode.generate(qr, { small: true });
    });
    
    client.on('ready', () => {
      console.log('Client is ready!');
    });
    
    client.on('remote_session_saved', () => {
      console.log('REMOTE SESSION SAVED');
    });
  
    client.initialize();
  
    process.on('SIGINT', () => {
      client.destroy();
      process.exit();
    });

    return client;
  });
};

module.exports = returnClientFull;

