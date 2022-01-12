const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.js");
const disbut = require("discord-buttons")(client);
const fs = require("fs");
const db = require("orio.db");
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`Toplamda ${files.length} Komut Var!`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`${props.help.name} İsimli Komut Aktif!`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

let cstoken;
if (ayarlar.TOKEN) {
  cstoken = ayarlar.TOKEN;
}
if (process.env.TOKEN) {
  cstoken = process.env.TOKEN;
}
if (cstoken) {
  client.login(cstoken);
} else {
  console.log("Projeye Hiç Bir Bot Tokeni Yazılmamış!");
}

client.ayarlar = ayarlar

  
//Projenizi Bir Sanal Sunucu(VDS) veya Kendi Bilgisayarınıza Kuracak İseniz Bu Kısmı Silin!
const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`Uptime Başarılı`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);
//Projenizi Bir Sanal Sunucu(VDS) veya Kendi Bilgisayarınıza Kuracak İseniz Bu Kısmı Silin!
 
 
{
client.on("ready", async () => {

  setInterval(() => {

    client.guilds.cache.map(m => {
      m.members.cache.map(user => {
        let data = db.get(`delay_${m.id}_${user.id}`)
        if (data) {
 
        
          let time = Date.now() - data;
          let sure = 10800000;

          // -------- \\
 
          if (time >= sure) {
       db.delete(`delay_${m.id}_${user.id}`)
}
        }
 });
      });
  }, 6000);
})
}

client.on("clickButton", async button => {
const disbut = require("discord-buttons")

let member = button.guild.members.cache.get(button.clicker.user.id)
let msg = button.message

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

const sil = new disbut.MessageButton()
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

// -------- \\       
   if(button.id == "sil"){
     msg.delete()
   }
if(button.id == "oy_oy") {

msg.edit("> 🛠️ __Veriler Hesaplanıyor__, **Lütfen Bekleyin!**", { 
button: iptal
})

// -------- \\

let veri1 = 1
let liste = []

// -------- \\

await client.guilds.cache.array()
.filter(mem => db.get(`vote_${mem.id}`))
.sort((a, b) => (db.get(`vote_${b.id}`) || 0) - (db.get(`vote_${a.id}`) || 0))
.slice(0, 10)
.map(async sunucu => {

// -------- \\

let data = db.get(`davet_${sunucu.id}`)
sunucu.fetchInvites().then(a => a.find(invite => invite.code === data)).then(async davet => {
if(!davet) {
if(!data) {

sunucu.channels.cache.filter(mr => mr.type == "text").random().createInvite({
  maxAge: 0, // 0 = infinite expiration
  maxUses: 0 // 0 = infinite uses
}).then(async (invite) => {

await db.set(`davet_${sunucu.id}`, invite.code)
})

// -------- \\

} else {
 
// -------- \\

sunucu.channels.cache.filter(mr => mr.type == "text").random().createInvite({
  maxAge: 0, // 0 = infinite expiration
  maxUses: 0 // 0 = infinite uses
}).then(async (invite) => {

await db.set(`davet_${sunucu.id}`, invite.code)

})
    }}
        })
            })

// -------- \\

await client.guilds.cache.array()
.filter(server => db.get(`vote_${server.id}`))
.sort((a, b) => { return ( db.get(`vote_${b.id}`) || 0) - (db.get(`vote_${a.id}`) || 0)})
.slice(0, 10)
.map(async sunucu => {

  liste.push(`**${veri1++}** - [**${sunucu.name}**](https://discord.gg/${db.get(`davet_${sunucu.id}`)}) Toplam oy: **${db.get(`vote_${sunucu.id}`)}** `)

})

// -------- \\

let embed = new Discord.MessageEmbed()
.setTitle("En Fazla Oy Alan Top 10 Sunucu")
.setDescription(liste)
.setColor("BLUE")
await msg.edit("Top 10 List", { 
embed: embed,
button: iptal
})

}
// -------- \\
if(button.id == "oy_üye") { 

msg.edit("> 🛠️ __Veriler Hesaplanıyor__, **Lütfen Bekleyin!**", { 
button: iptal
})

// -------- \\

let veri1 = 1
let liste = []

// -------- \\

await client.guilds.cache.array()
.filter(server => server.memberCount >= 1)
.sort((a, b) => b.memberCount - a.memberCount)
.slice(0, 10)
.map(async sunucu => {

// -------- \\
  
let data = db.get(`davet_${sunucu.id}`)
sunucu.fetchInvites().then(a => a.find(invite => invite.code === data)).then(async davet => {
if(!davet) {
if(!data) {

sunucu.channels.cache.filter(mr => mr.type == "text").random().createInvite({
  maxAge: 0, // 0 = infinite expiration
  maxUses: 0 // 0 = infinite uses
}).then(async (invite) => {

await db.set(`davet_${sunucu.id}`, invite.code)

})

// -------- \\

} else {

// -------- \\

sunucu.channels.cache.filter(mr => mr.type == "text").random().createInvite({
  maxAge: 0, // 0 = infinite expiration
  maxUses: 0 // 0 = infinite uses
}).then(async (invite) => {

await db.set(`davet_${sunucu.id}`, invite.code)

})
    }}
        })
            })

// -------- \\

await client.guilds.cache.array()
.filter(server => server.memberCount >= 1)
.sort((a, b) => b.memberCount - a.memberCount)
.slice(0, 10)
.map(async sunucu => {

  liste.push(`**${veri1++}** - [**${sunucu.name}**](https://discord.gg/${db.get(`davet_${sunucu.id}`)}) Üye: **${sunucu.memberCount}** `)

})

// -------- \\

let embed = new Discord.MessageEmbed()
.setTitle("En Fazla Üyesı Olan Top 10 Sunucu")
.setDescription(liste)
.setColor("BLUE")
await msg.edit("Top 10 List", { 
embed: embed,
button: iptal
})

}
// -------- \\
if(button.id == "oy_boost") { 

msg.edit("> 🛠️ __Veriler Hesaplanıyor__, **Lütfen Bekleyin!**", { 
button: iptal
})

// -------- \\

let veri1 = 1
let liste = []

// -------- \\

await client.guilds.cache.array()
.filter(server => server.premiumSubscriptionCount >= 1)
.sort((a, b) => b.premiumSubscriptionCount - a.premiumSubscriptionCount)
.slice(0, 10)
.map(async sunucu => {

// -------- \\

let data = db.get(`davet_${sunucu.id}`)
sunucu.fetchInvites().then(a => a.find(invite => invite.code === data)).then(async davet => {
if(!davet) {
if(!data) {

sunucu.channels.cache.filter(mr => mr.type == "text").random().createInvite({
  maxAge: 0, // 0 = infinite expiration
  maxUses: 0 // 0 = infinite uses
}).then(async (invite) => {

await db.set(`davet_${sunucu.id}`, invite.code)

})

// -------- \\

} else {

// -------- \\

sunucu.channels.cache.filter(mr => mr.type == "text").random().createInvite({
  maxAge: 0, // 0 = infinite expiration
  maxUses: 0 // 0 = infinite uses
}).then(async (invite) => {

await db.set(`davet_${sunucu.id}`, invite.code)

})
    }}
        })
            })

// -------- \\

await client.guilds.cache.array()
.filter(server => server.premiumSubscriptionCount >= 1)
.sort((a, b) => b.premiumSubscriptionCount - a.premiumSubscriptionCount)
.slice(0, 10)
.map(async sunucu => {

  liste.push(`**${veri1++}** - [**${sunucu.name}**](https://discord.gg/${db.get(`davet_${sunucu.id}`)}) Sunucu Boost Sayısı: **${sunucu.premiumSubscriptionCount}** `)

})

// -------- \\

let embed = new Discord.MessageEmbed()
.setTitle("En Fazla Boostu Olan Top 10 Sunucu")
.setDescription(liste)
.setColor("BLUE")
await msg.edit("Top 10 List", { 
embed: embed,
button: iptal
})

}
// -------- \\
if(button.id == "oy_ses") { 

msg.edit("> 🛠️ __Veriler Hesaplanıyor__, **Lütfen Bekleyin!**", iptal)

// -------- \\

let veri1 = 1
let liste = []

// -------- \\

await client.guilds.cache.array()
.filter(server => server.members.cache.filter(a => a.voice.channel).size >= 1)
.sort((a, b) => b.members.cache.filter(a => a.voice.channel).size - a.members.cache.filter(a => a.voice.channel).size)
.slice(0, 10)
.map(async sunucu => {

// -------- \\

let data = db.get(`davet_${sunucu.id}`)
sunucu.fetchInvites().then(a => a.find(invite => invite.code === data)).then(async davet => {
if(!davet) {
if(!data) {

sunucu.channels.cache.filter(mr => mr.type == "text").random().createInvite({
  maxAge: 0, // 0 = infinite expiration
  maxUses: 0 // 0 = infinite uses
}).then(async (invite) => {

await db.set(`davet_${sunucu.id}`, invite.code)

})

// -------- \\

} else {

// -------- \\

sunucu.channels.cache.filter(mr => mr.type == "text").random().createInvite({
  maxAge: 0, // 0 = infinite expiration
  maxUses: 0 // 0 = infinite uses
}).then(async (invite) => {

await db.set(`davet_${sunucu.id}`, invite.code)

})
    }}
        })
            })

// -------- \\

await client.guilds.cache.array()
.filter(server => server.members.cache.filter(a => a.voice.channel).size >= 1)
.sort((a, b) => { return b.members.cache.filter(a => a.voice.channel).size - a.members.cache.filter(a => a.voice.channel).size})
.slice(0, 10)
.map(async sunucu => {

  liste.push(`**${veri1++}** - [**${sunucu.name}**](https://discord.gg/${db.get(`davet_${sunucu.id}`)}) Sunucuda Seslıde Olan Üye Sayısı: **${sunucu.members.cache.filter(a => a.voice.channel).size}** `)

})

// -------- \\

let embed = new Discord.MessageEmbed()
.setTitle("En Fazla Seslı Aktıf Kullanıcsı Olan Top 10 Sunucu")
.setDescription(liste)
.setColor("BLUE")
await msg.edit("Top 10 List", { 
embed: embed,
button: iptal
})

}
// -------- \\
if(button.id == "iptal") {
    msg.edit({ 
embed: embed,
buttons: [oy, ses, boost, üye, sil]
    })
}
// -------- \\
button.reply.defer();
})