const { channel } = require("diagnostics_channel");
const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents }) 
const estados = [`linecraft`]

client.on('ready', () => {

    setInterval(() => {
        function presence(){
            client.user.setPresence({
                status: 'on',
                Activity: {
                    name: estados[Math.floor(Math.random() * estados.length)],
                }
              })
           }
           presence()
         }, 10000);
    console.log(`Conectado en: ${client.user.tag}`);
});

const fs = require("fs");
let { readdirSync } = require ("fs");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./comandos").filter(file => file.endsWith(".js"))

for (const file of commandFiles){
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.on('messageCreate', async (message) => {

    if(message.channel.type === 'dm') return; 
    if(message.author.bot) return; 

    let prefix = "!"//prefix de tu bot

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase() 
    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
    cmd.execute(client, message, args)
  }
  
})

client.login('OTk0NDYyNTEwNDgyNzE4Nzgy.GBMw_g.nrFgAIeAvILQAH1u6r02uyvDlBme1RReN92i2U');//token de tu boy


