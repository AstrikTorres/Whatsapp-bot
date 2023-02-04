require("dotenv").config();
const { Client, RemoteAuth, } = require('whatsapp-web.js');

const { MongoStore } = require('wwebjs-mongo');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

module.exports = async function getClient() {
  let client = null;
  await mongoose.connect(process.env.MONGO_HOST).then(() => {
    console.log('Connected to MongoDB');

    const sessionStore = new MongoStore({ mongoose: mongoose });
    client = new Client({
      puppeteer: {
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
        ]
      },
      authStrategy: new RemoteAuth({
        store: sessionStore,
        backupSyncIntervalMs: 300000
      })
    });
  });

  // Continue the initialization in the archive whatsapp-client-events.js
  return client;
}  
