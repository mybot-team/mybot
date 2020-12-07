const fs = require("fs");
const { join } = require("path");
const Discord = require("discord.js");

class Cliente extends Discord.Client {
  constructor(opciones) {
    super(opciones)
  }

  iniciar(token) {
    this.comandos = new Discord.Collection();
    this.registrarBase();
    this.commandHandler();
    this.login(token);
  }

  commandHandler() {
    const categorias = fs.readdirSync(join(__dirname, 'commands/'));
    for(let i = 0; i < categorias.length; i++) {
      const comandos = fs.readdirSync(join(__dirname, `commands/${categorias[i]}`));
      for(const c of comandos) {
        try {
          const comando = require(join(__dirname, `commands/${categorias[i]}/${c}`));
          this.comandos.set(comando.ayuda.nombre, comando);
          console.log(`Comando ${c} cargado correctamente.`)
        } catch(e) {
          console.log(`Error al cargar comando ${c}: ${e.message}`);
        }
      }
    }
  }

  registrarBase() {
    /*
      Aquí debe ir lo relacionado a la base de datos, lo que queremos que pase al iniciar el bot.
      Por ejemplo conectarnos a la base y crear tablas si es que es sql, si no solo conectarnos.
      Esto ya se lo dejo a Crater :thumbsup:
    */
  }
}

module.exports = Cliente;