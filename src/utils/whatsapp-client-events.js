require("dotenv").config();
const qrcode = require('qrcode-terminal');
const getClient = require('../utils/whatsapp-client');

const initializeClient = async () => {
  return getClient().then((client) => {
    
    client.on('qr', (qr) => {
      qrcode.generate(qr, { small: true });
    });

    client.on('authenticated', () => {
      console.log('AUTHENTICATED');
    });
    
    client.on('ready', () => {
      console.log('Client is ready!');
    });

    client.on('auth_failure', () => {
      console.log('AUTHENTICATION FAILURE');
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

// Export the client to be used in services
module.exports = initializeClient;
