const db = require('orio.db')
const disbut = require('discord-buttons');
const Discord = require('discord.js')

exports.run = async(client, message, args) => { 

// Buton Ayar Menüsü \\
const oy = new disbut.MessageButton()
.setStyle("grey")
.setLabel("Oy")
.setID("oy_oy")
// -------- \\
const ses = new disbut.MessageButton()
.setStyle("grey")
.setLabel("Ses")
.setID("oy_ses")
// -------- \\
const boost = new disbut.MessageButton()
.setStyle("grey")
.setLabel("Boost")
.setID("oy_boost")
// -------- \\
const üye = new disbut.MessageButton()
.setStyle("grey")
.setLabel("Üye")
.setID("oy_üye")
// -------- \\
const iptal = new disbut.MessageButton()
.setStyle("grey")
.setLabel("Geri Dön")
.setID("iptal")
// -------- \\
const timeout = new disbut.MessageButton()
.setStyle("red")
.setDisabled(true)
.setLabel("Time out.")
.setID("iptal")
// -------- \\
const ip = new disbut.MessageButton()
.setStyle("red")
.setLabel("Kapat")
.setID("sil")
// Buton Ayar Menüsü \\

// Embed \\
   let embed = new Discord.MessageEmbed()
  .setTitle(`Top Komutu Bölüm Seçme Menüsü`)
  .setDescription(`
・**Oy Butonu** En fazla oya sahip 10 sunucuyu listeler.
・**Oy Ses** En fazla ses aktifliğine sahip 10 sunucuyu listeler.
・**Oy Boost** En fazla boosta sahip 10 sunucuyu listeler.
・**Oy Üye** En fazla üyeye sahip 10 sunucuyu listeler.`)
  .setColor("BLUE")
// Embed \\

// Ana Komutlar \\
  message.channel.send({
buttons: [oy, ses, boost, üye, ip],
embed: embed
  })

};
exports.conf = {
aliases: []
};

exports.help = {
name: 'top'
};