const Discord = require('discord.js');
const client = new Discord.Client();
const Music = require('discord.js-musicbot-addon');

Music.start(client, {
  youtubeKey: 'AIzaSyAvE9uj8jqFWuBTbCPn3kucOKp6_zord2k' ,
  prefix: "!",
  leaveAlt: ["levi", "unicorns"],
  helpCmd: "help"
});

client.login("NDg4MzQzMTc3MDY1OTIyNTYw.DncUXg.UMCBUpIBkuB-pHVdvqThI8Dd3SI");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('ready', () => { client.user.setGame('Little Nightmares') })
 
client.login('NDg4MzQzMTc3MDY1OTIyNTYw.DncUXg.UMCBUpIBkuB-pHVdvqThI8Dd3SI');