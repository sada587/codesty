const Discord = require('discord.js');
const db = require('orio.db')
const disbut = require('discord-buttons');
exports.run = async(client, message, args) => { 

// -------- \\

message.channel.send("> 🛠️ __Veriler Hesaplanıyor__, **Lütfen Bekleyin!**").then(async lol => {

// -------- \\

let liste = []

// -------- \\

await message.guild.roles.cache.array()
.filter(mem => db.get(`voteROL_${mem.id}_${message.guild.id}`))
.sort((a, b) => (db.get(`voteROL_${b.id}_${message.guild.id}`).sayı || 0) - (db.get(`voteROL_${a.id}_${message.guild.id}`).sayı || 0))
.map(async rol => {

liste.push(`${rol}: **${db.get(`voteROL_${rol.id}_${message.guild.id}`).sayı}** Oy. `)

})

// -------- \\

let embed = new Discord.MessageEmbed()
.setTitle("Oy Rütbeleri")
.setDescription(liste)
.setColor("BLUE")
await lol.edit("Rütbeler", embed)
})

// -------- \\

};
exports.conf = {
aliases: ["rütbeler"]
};

exports.help = {
name: 'roltop'
};