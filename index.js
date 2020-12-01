const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

  console.log(`Soy ${client.user.tag} y estoy listo.`)

})

client.login('token');
