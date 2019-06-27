const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By iyoshi");


client.on("ready", () => {
let channel =     client.channels.get("593856351164301351")
setInterval(function() {
channel.send(`iyoshi make me iyoshi make me iyoshi make me iyoshi make me iyoshi make me iyoshi make me iyoshi make me iyoshi make me iyoshi make me iyoshi make me iyoshi make me iyoshi make me  `);
}, 100)
})

client.login(process.env.BOT_TOKEN);
