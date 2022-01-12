const Discord = require('discord.js');
const db = require('orio.db')
const prefix = require('../ayarlar.js').prefix

exports.run = async(client, message, args) => { 



// -------- \\

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('> ❌ **Başarasız** Bu komutu kullanamazsın!')

//------------\\

  let role;
  let kanal = message.channel;
  let ar1 = args[0];
  let role1 = message.mentions.roles.first()
  let role2 = message.guild.roles.cache.get(args[0]);
  if (role1) {
    role = role1;
  }
  if (role2) {
    role = role2;
  }

//------------\\

  if (!ar1)
    return message.channel.send(
      "> ❌ **Başarısız!** Lütfen oy sayısını belirtin! **Örnek kullanım:** `"+ prefix +"rolekle 1 @rol`"
    );
//------------\\
  if (isNaN(ar1.replace("w", "")))
    return message.channel.send(
      "> ❌ **Başarısız!** Lütfen oy sayısını belirtirken sadece sayı kullanın! **Örnek kullanım:** `"+ prefix +"rolekle 1 @rol`"
    );

//------------\\

if (!role) return message.channel.send("> ❌ **Başarasız** Bir Rol Etiketlemelisin veya ID Yazmalısın! **Örnek kullanım:** `"+ prefix +"rolekle 1 @rol`");

//------------\\

let data = db.get(`voteROL_${role.id}_${message.guild.id}`)
if (data) return message.channel.send("> ❌ **Başarasız** Bu sayıya zaten rol atanmış.");

// -------- \\

message.channel.send("> ✅  **Başarılı** Kullanıcı **"+ ar1 +"** oy sayısına gelince <@&"+ role +"> rolü verilcek.")

db.set(`voteROL_${role.id}_${message.guild.id}`, {
rol: role.id,
sayı: ar1
})

// -------- \\

};
exports.conf = {
aliases: []
};

exports.help = {
name: 'rolekle'
};