const Discord = require("discord.js");

module.exports = {
  name: "ping",//onombre del comando
  alias: ["!"],

  execute(client, message, args){
    
     const embed = new Discord.MessageEmbed()
    .setTitle("🏓 Pong!")//lo que quieres que diga el bot
    .setColor("GREEN")//color de tu emded
    .setFooter("\nSistema de Ping en Discord!") //el footer que quieres que diga tu bot
    
  message.channel.send({ embeds: [embed] })
    
  }

}