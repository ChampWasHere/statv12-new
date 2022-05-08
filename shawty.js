const Discord = require('discord.js')
const client = new Discord.Client()
const Settings = require("./Shawty/Config.json")
const shawtyconf = require("./Shawty/Settings.json")

require('./Shawty/Util/shawtyLoader')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./Shawty/Commands', (err, files) => { 
    files.forEach(fs => { 
    let command = require(`./Shawty/Commands/${fs}`); 
    client.commands.set(command.config.name, command);
    if(command.config.aliases) command.config.aliases.forEach(Aliases => client.aliases.set(Aliases, command.config.name));
   });
});

fs.readdir("./Shawty/Events", (err, files) => {
    if (err) return console.error(err);
    files.filter(file => file.endsWith(".js")).forEach(file => {
        let prop = require(`./Shawty/Events/${file}`);
        if (!prop.configuration) return;
        client.on(prop.configuration.name, prop);
    });
  });


  client.login(shawtyconf.Token).catch(() => console.log('Tokeni kontrol ediniz.'));