
const Discord = require('discord.js'); // La libreria de discord.js (obvio)
const client = new Discord.Client(); // nuevo cliente ps

client.on('ready', () => { // un evento 
  console.log(`tamo ridy`); // cuando este el bot ridy enviara a la consola eso
}); 

client.on('message', msg => { // un evento de mensajes
  if (msg.content === 'ml!ping') { // si el mensaje contiene "ping"
    msg.channel.send(`Mi latencia es de ${client.ws.ping}ms`); // nosotros le decimos "pong!"
  }
  if(msg.content === 'ml!avatar') {
const usuario = message.mentions.users.first() || message.author;
const miavatar = new Discord.MessageEmbed()
.setTitle(`Avatar de ${usuario.username}`)
.setImage(usuario.displayAvatarURL({size: 1024, dynamic: true}))  
.setColor('RANDOM')

msg.channel.send(miavatar) // no pregunten para que sirve esta coso pero creo que cualquiera sabe a si que me da igual explicar
}
});

client.login('El token'); // el token
