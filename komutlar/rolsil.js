const Discord = require('discord.js');
const db = require('orio.db')
const prefix = require('../ayarlar.js').prefix
exports.run = async(client, message, args) => { 


// -------- \\

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('> ❌ **Başarısız** Bu komutu kullanamazsın!')

//------------\\

  let role;
  let kanal = message.channel;
  let role1 = message.mentions.roles.first()
  let role2 = message.guild.roles.cache.get(args[0]);
  if (role1) {
    role = role1;
  }
  if (role2) {
    role = role2;
  }

//------------\\

if (!role) return message.channel.send("> ❌ **Başarasız** Bir Rol Etiketlemelisin veya ID Yazmalısın! **Örnek kullanım:** `"+ prefix +"rolsil 1 @rol`");

//------------\\

let data = db.get(`voteROL_${role.id}_${message.guild.id}`)
if (!data) return message.channel.send("> ❌ **Başarasız** Bu sayıya zaten rol atanmamış.");

//------------\\

message.channel.send("> ✅ **Başarılı** Rol silindi.")
db.delete(`voteROL_${role.id}_${message.guild.id}`)

//------------\\

};
exports.conf = {
aliases: []
};

exports.help = {
name: 'rolsil'
};