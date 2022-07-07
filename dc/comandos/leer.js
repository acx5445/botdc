const Discord = require("discord.js");
//te recomiendo solo editar los que vallan en 'EJEMPLO'

module.exports = {
  name: "inf",//aqui se pondra el nombre que deseas poner.
  alias: ["!"],

  execute(client, message, args){
    
     const embed = new Discord.MessageEmbed()
          .setTitle('• SERVER || AYUDA')
      .setColor('#005cff') //color que deseas poner
      .setDescription("\nESto lo puse de prueba por si quieres hacer un mensaje emded si pones \ n junto se pondran espacios recuerda leer los codigos por errores\n\nya esto tu lo puedes editar.").setThumbnail("https://media.discordapp.net/attachments/983595181335015475/987959465691193384/unknown.png")//foto 
      .setFooter("SERVER 2021-2022") 
 message.channel.send({ embeds: [embed] })
    
  }

}