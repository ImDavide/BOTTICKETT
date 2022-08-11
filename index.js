const Discord = require("discord.js");
const fs = require('fs');
const path = require('path');
const colors = require('colors')
require('discord-inline-reply')
const fivem = require('discord-fivem-api')
require("dotenv").config()
const config = require('./config.json');
const { Server } = require("http");

const client = new Discord.Client({ disableEveryone: true });

require('discord-buttons')(client);


client.on('uncaughtException', function (err) {
  console.error(err.stack)
})

client.on('ready', () => {
  console.log(` ${client.user.username} on`);
})

//Status
const status = [
  { name: 'By Davide', type: 'PLAYING'},
  { name: 'SXD', type: 'PLAYING'}
];

  
setInterval(() => {
  const randomStatus = status[Math.floor(Math.random() * status.length)];
  client.user.setPresence({ activity: randomStatus });
}, 5000);

  
setInterval(() => {
  const randomStatus = status[Math.floor(Math.random() * status.length)];
  client.user.setPresence({ activity: randomStatus });
}, 5000);

//Handler comandi
fs.readdir('./src/commands', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    if (!file.endsWith('.js')) return
    let eventName = file.substring(0, file.indexOf('.js'))
  })
})

// HANDLER EVENTI
fs.readdir('./src/events', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    if (!file.endsWith('.js')) return
    let eventName = file.substring(0, file.indexOf('.js'))
    let eventModule = require(path.join(__dirname, './src/events', eventName))
    client.on(eventName, eventModule.bind(null, client))
  })
})


process.on('unhandledRejection', (reason, p) => {
  if (reason?.message === 'The request is missing a valid API key.') return;
  let channel = client.channels.cache.get('995684261715775589'); // id canale errore
  console.log(reason, p);
  channel?.send({
      embeds: [
          new MessageEmbed()
              .setTitle('Unhandled Rejection')
              .setDescription(`${reason}`)
              .setColor('2f3136')
      ],
  });
});
process.on('uncaughtException', (err, origin) => {
  let channel = client.channels.cache.get('995684261715775589'); // id canale errore
  console.log(err, origin);
  channel?.send({
      embeds: [
          new MessageEmbed()
              .setTitle('Uncaught Exception')
              .setDescription(`${err}`)
              .setColor('2f3136')
      ],
  });
});
process.on('uncaughtExceptionMonitor', (err, origin) => {
  let channel = client.channels.cache.get('995684261715775589'); // id canale errore
  console.log(err, origin);
  channel?.send({
      embeds: [
          new MessageEmbed()
              .setTitle('Uncaught Exception')
              .setDescription(`${err}`)
              .setColor('2f3136')
      ],
  });
});
process.on('multipleResolves', (type, promise, reason) => {
  let channel = client.channels.cache.get('995684261715775589'); // id canale errore
  console.log(type, promise, reason);
  channel.send({
      embeds: [
          new MessageEmbed()
              .setTitle('Multiple Resolves')
              .setDescription(`${type}`)
              .setColor('2f3136')
      ],
  });
});

client.login(process.env.token)