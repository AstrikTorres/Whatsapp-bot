require("dotenv").config();
const { Client, RemoteAuth, } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const { MongoStore } = require('wwebjs-mongo');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

module.exports = async function initializeClient() {
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

    client.on('qr', (qr) => {
      qrcode.generate(qr, { small: true });
    });

    client.on('authenticated', () => {
      console.log('AUTHENTICATED');
    });

    client.on('ready', () => {
      console.log('READY');
    });

    client.on('auth_failure', () => {
      console.log('AUTHENTICATION FAILURE');
    });

    client.on('remote_session_saved', () => {
      console.log('REMOTE SESSION SAVED');
    });
    client.initialize();
  });
  return client;
}  