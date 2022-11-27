require("dotenv").config();
const { Client, RemoteAuth, } = require('whatsapp-web.js');
const { MongoStore } = require('wwebjs-mongo');
const mongoose = require('mongoose');

const returnClient = async () => {
  return mongoose.connect(process.env.MONGODB_URI).then(() => {
    const store = new MongoStore({ mongoose: mongoose });
    return new Client({
      puppeteer: {
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
        ]
      },
    
      authStrategy: new RemoteAuth({
        backupSyncIntervalMs: 300000,
        clientId: 'My-bot-remote',
        store: store,
        dataPath: './.sessions',
      }),
    });
  });
};

module.exports = returnClient;