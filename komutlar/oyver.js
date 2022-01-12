const Discord = require('discord.js');
const db = require('orio.db')
const disbut = require('discord-buttons');
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args) => {

// -------- \\

 let delay = db.get(`delay_${message.guild.id}_${message.author.id}`)
 let data  = db.get(`vote_${message.guild.id}`) 
 let use   = db.get(`voteUSER_${message.author.id}_${message.guild.id}`)
// -------- \\ 
if(delay+10800000 > Date.now()){
 let zaman = moment.duration(delay + 10800000 - Date.now()).format("[**] D [**Gün**] H [**Saat**] m [**Dakika**] s [**Saniye]")
 if(delay) return message.channel.send("❌ Uyarı Bu kodu kullanmak için " + zaman + " beklemen gerekiyor.")
} else {
  db.delete(`delay_${message.guild.id}_${message.author.id}`)


// -------- \\

  const slots = ["1","2","3","4","5","6","7","8","9","q","w","e","r","t","y","u","o","p","a","s","d","f","g","h","j","k","l","i","z","x","c","v","b","n","m","!","?","Q","W","E","R","T","Y","U","O","P","A","S","D","F","G","H","H","J","K","L","Z","X","C","V","B","N","N","M",];
  var item  = slots[Math.floor(Math.random() * slots.length)];
  var item2 = slots[Math.floor(Math.random() * slots.length)];
  var item3 = slots[Math.floor(Math.random() * slots.length)];
  var item4 = slots[Math.floor(Math.random() * slots.length)];
  var item5 = slots[Math.floor(Math.random() * slots.length)];
  var item6 = slots[Math.floor(Math.random() * slots.length)];
  var item7 = slots[Math.floor(Math.random() * slots.length)];
// -------- \\
 var kelime = item + item2 + item3 + item4 + item5 + item6 + item7
 var kelime1 = item4 + item + item3 + item4 + item5 + item6 + item7
 var kelime2 = item + item4 + item3 + item5 + item + item6 + item7
 var kelime3 = item7 + item4 + item3 + item5 + item + item6 + item
 // -------- \\
 
const rast1 = new disbut.MessageButton()
.setStyle("grey")
.setLabel(kelime2)
.setID("rast1")
// -------- \\
const rast2 = new disbut.MessageButton()
.setStyle("grey")
.setLabel(kelime1)
.setID("rast2")
// -------- \\
const doğru = new disbut.MessageButton()
.setStyle("green")
.setLabel(kelime)
.setID("doğru")
// -------- \\
const rast3 = new disbut.MessageButton()
.setStyle("grey")
.setLabel(kelime3)
.setID("rast3")
// -------- \\
const time = new disbut.MessageButton()
.setStyle("red")
.setDisabled(true)
.setLabel("Time out.")
.setID("iptal")

// -------- \\

 const embed = new Discord.MessageEmbed() 
  .setColor("BLUE")
  .setImage("https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=blue-logo&text="+item+item2+item3+item4+item5+item6+item7)

// -------- \\

  const cevp = [new disbut.MessageActionRow().addComponents(rast1, rast2, doğru, rast3), new disbut.MessageActionRow().addComponents(rast1, rast2, rast3, doğru), new disbut.MessageActionRow().addComponents(rast1, doğru, rast2, rast3), new disbut.MessageActionRow().addComponents(doğru, rast1, rast3, rast2)]
  var weq  = cevp[Math.floor(Math.random() * cevp.length)];

// -------- \\
 
await message.channel.send("<@!" + message.author.id +'> Resimdeki kodu seç. İşlem **30** saniye sonra iptal edilecek.', {
  components: weq,
  embed: embed
}).then(m => { 

// -------- \\
let col = m.createButtonCollector((a) => a, { time: 30000});
        col.on('collect', async (collect) => {
if(collect.clicker.user.id !== message.author.id) return;
       
if(collect.id == "doğru") { 
// -------- \\

      await db.add(`vote_${message.guild.id}`, 1)
      await db.add(`voteUSER_${message.author.id}_${message.guild.id}`, 1)
      await db.set(`delay_${message.guild.id}_${message.author.id}`, Date.now())

// -------- \\

 data = db.get(`vote_${message.guild.id}`) 

 await m.delete()
     
 message.channel.send("> ✅ **Başarılı!** <@!"+ message.author +"> Sunucuya oy verdiniz! Sunucunun toplam oyu: `"+ data +"` .") 
   
 col.stop()

// -------- \\

message.guild.roles.cache.array()
.filter(mem => db.get(`voteROL_${mem.id}_${message.guild.id}`))
.map(async rol => {
let data2 = db.get(`voteROL_${rol.id}_${message.guild.id}`)

if(data2.sayı-1 <= use) {
// -------- \\
await message.member.roles.add(rol.id)
// -------- \\
} else  {
// -------- \\
await message.member.roles.remove(rol.id)
// -------- \\
}
   })

return;
}

// -------- \\

      message.channel.send("> ❌ **Hata!** <@!"+ message.author +"> Yanlış butonu seçtiniz.")  
      m.delete()
    
collect.reply.defer();

  })
// -------- \\

   col.on('end', async (collect) => {
   if(!collect.size) {
   m.edit("Süre bitti.", time)
}
  })
     })

// -------- \\
}
};
exports.conf = {
  aliases: ["oy-ver"]
};

exports.help = {
  name: "oyver"
};
