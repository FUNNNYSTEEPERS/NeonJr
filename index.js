const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const { prefix, db } = require("./config.json");
require("./server.js");
const Discord = require("discord.js");
const client = new Client({
  disableEveryone: true
});
//--------WELCOME---------
const buttons = require("discord-buttons")(client);
const { createCanvas, loadImage, registerFont } = require("canvas");
//--------MUSIC - CLIENT------
const { Player } = require('discord-player');
const fs = require("fs")
client.player = new Player(client);

//-----database-------
const {Database} = require("quickmongo")
//Collection
client.db =  new Database(db)
client.commands = new Collection();
client.aliases = new Collection();
client.queue = new Map();
client.snipes = new Map();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


const mongoose = require("mongoose");

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("Connected to mongo db"));



//RANKS
const Levels = require("discord-xp");
Levels.setURL(db);












client.on("ready", () => {
  console.log(`Hi, ${client.user.username} is now online!`);

  client.user.setActivity("dsc.gg/moondev.xyz");
});


client.on("clickMenu",async menu => {

if(menu.values[0]== "APPLE"){



	menu.channel.send(`I ALSO LIKE APPLE`)
}


if(menu.values[1]== "MANGO"){



	menu.channel.send(`I ALSO LIKE MANGO`)


}
if(menu.values[3]== "BANANA"){



	menu.channel.send(`I ALSO LIKE BANANA`)
}



})

















client.on("messageDelete",async (message) => {




  client.snipes.set(message.channel.id,{
content : message.content,
author: message.author.tag,
image: message.attachments.first() ? message.attachments.first().proxyURL : null




  })
})



//ANTI-MENTION
client.on("message",async message => {
  
if(message.mentions.members.array().length >= 4){
  
 if(message){
   await  message.delete()
 } 
return message.reply(`You are not allow to mention mass members!`) 
  
}
 
  
  
})

//THANKS FOR WATCHING 
//FOR MORE HELP JOIN MY SERVER 






client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;



        const randomXp = Math.floor(Math.random() * 98) + 1;
        const level = await Levels.appendXp(
          message.author.id,
          message.guild.id,
          randomXp
        );
        if (level) {
          const user = await Levels.fetch(message.author.id, message.guild.id);
          message.channel
            .send(
              ` ${message.author.username}, You just leveled up to level ${user.level}! <a:hydroccx_owner:963660210466070538>`
            )
            .then((m) => m.delete({ timeout: 10000 }));
        }
      
    



//AFK SYSTEM 
 //IF YOU  WANT MAKE GLOABAL AFK SYSTEM  JUST  REMOVE SERVER  id
 //THAKKS FOR WATCHING 
 //DON'T  FORGET  TO JOIN SUPPORT  SERVER 
  
  if (!message.content.startsWith(prefix)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  // If a command is finally found, run the command
  if (command) command.run(client, message, args);
});

client.on("message", async message => {
  if (message.content === "!welcome") {
    client.emit("guildMemberAdd", message.member);
  }
});
client.on("guildMemberAdd", async member => {

let message = `${member} welcome to ${member.guild.name}`


let channel = await client.db.get(`channel_${member.guild.id}`)

if(!channel)return;

client.channels.cache.get(channel).send(message)
  
  


});
client.login("OTUwMjg2ODE1OTUxMTk2MjEw.YiWtkA.yjAH5__OWlkhnpXux-jIp9v7PRI");

////////////////////////////////////////////
//
// ❤️ : Coded By Solar
// 🖤 : Credit's Moon Development
// 💙 : Join For Support
// 🤍 : Invite Neon : https://dsc.gg/neonbot
//
////////////////////////////////////////////