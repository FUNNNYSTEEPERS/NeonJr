const { MessageEmbed } = require('discord.js')

module.exports = {
  name:"nitro",
  run: async(client, message, args) => {


  const Discord = require("discord.js")        
  let embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("A wild gift appears")
      .setThumbnail("https://cdn.discordapp.com/attachments/899647915339972641/904326176909176882/EmSIbDzXYAAb4R7.png")
      .setDescription(`**Nitro** \n Expires in 48 hours`)
  

 const Sendmenu = await message.channel.send(embed);
  }
}