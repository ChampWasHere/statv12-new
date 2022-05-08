const Discord = require("discord.js");
const shawtyconf = require('./../Settings/Settings.json');

module.exports = client => {

      client.user.setActivity(`${shawtyconf.Status}`, { status: "online"} ,{ type: 'PLAYİNG'})
      .then(console.log(`${client.user.tag} İsmiyle Discord Bağlantısı kuruldu.`))
      .catch(() => console.log(`Bir hata ile karşılaştım.`))

};