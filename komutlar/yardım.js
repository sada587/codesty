const Discord = require('discord.js')
const prefix = require('../ayarlar.js').prefix

exports.run = async function(client, message, args) {


message.channel.send(`**Bot Komutları**

・**${prefix}oyver** Sunucuya oy verirsiniz.
・**${prefix}rolekle <oysayısı> @rol** Oy ödülü eklersiniz.
・**${prefix}rolsil @rol** Eklediğiniz rol ödülünü silersiniz.
・**${prefix}rütbeler** Rütbeleri kontrol edersiniz.
・**${prefix}top** Sunucuları kriterlere göre listelersiniz.

`)

};

exports.conf = {
  aliases: ["help"] 
};

exports.help = {
  name: 'yardım'
};