const Discord = require('discord.js'); // La libreria de discord.js (obvio)
const client = new Discord.Client(); // nuevo cliente ps

client.on('ready', () => { // un evento 
  console.log(`tamo ridy`); // cuando este el bot ridy enviara a la consola eso
}); 

client.on('message', msg => { // un evento de mensajes
  if (msg.content === 'ping') { // si el mensaje contiene "ping"
    msg.reply('Pong!'); // nosotros le decimos "pong!"
  }
});

client.login('El token'); // el token
