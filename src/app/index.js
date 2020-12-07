require("dotenv").config({
  path: require("path").join(__dirname, '.env')
});

const Cliente = new (require("./client"))();
let prefix = "cm!"; // Comunidad MyBOT, luego será cambiado a lo de la db o puesto en la clase cliente.

Cliente.on("ready", () => console.log('Listo'));

Cliente.on("message", async(message) => {
  if(message.author.bot || message.channel.type !== "text" || !message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  let cmd;
  if(Cliente.comandos.has(comando)) {
    cmd = Cliente.comandos.get(comando)
  } else return; // No existe el comando

  try {
    // Hacemos esto asi para obtener errores al correr el comando si es que pasa alguno.
    await cmd.run(Cliente, args, message);
  } catch(e) {
    return message.channel.send('Error al ejecutar el comando: ', e.message);
  }
})

Cliente.iniciar(process.env.TOKEN);