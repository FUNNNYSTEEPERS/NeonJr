const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')


module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
    let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Page Home\n"+ client.user.username + " | Made by moondev", client.user.displayAvatarURL())
        
        .setDescription(`<a:pin:963660404565893160> __**Prefix Information**__\n> My PrefixIs \`?\`\n > You can also mention me to get prefix info.\n\n > <:info:963661785444024340> __**My features**__> \n  > <:Staff:963752890214793246> **Mod | Admin**  \n > <a:music:966669964817870868> **Music Cmds** \n >  <:image:966669961743442001>  **Image cmds** \n  > <a:PepeNotFunny:966670259144761355>  **Fun cmds** \n  > <a:filter:966670661332398140> **Rank Command's** \n\n > <:serveur:967000879100203009>  **${client.guilds.cache.size} Guilds**\n> <a:timer:967000881440632882>  \`${days} Days\`, \`${hours}Hrs\`, \`${minutes} Mins\`, \`${seconds} Secs\` **Uptime**\n> <a:latency_ping:967000880719224883>  \`${client.ws.ping}ms\` **Ping**\n\n`)
        .setColor(colors.Neon);

        const embed1 = new Discord.MessageEmbed()
        .setTitle('Admin')
        .addField("ㅤ⠀⠀⠀ \n **Admin Cmd's** |  <:AdminLogo:967320085435916368> ",
          "`addrole` `announce` `ban` `embed` `hackban` `lockdown` `kick` `lock` `nuke` `removerole` `unban` `unlock` `membercount` `moveaall` `nuke` `poll` `purge` `react` `setnick` `slowmode` `snipe` `steal-emoji` `unban` `mute` `unmute` `voicekick` `warn` `autorole` `role-all`\n`"
        )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.Neon);

        const embed2 = new Discord.MessageEmbed()
      .setTitle('Music Commands')
      .addField("⠀⠀⠀ \n **Music** | <a:music:966669964817870868>  ",
        "`join` `leave` `play` `loop` `lyrics` `pause` `nowplaying` `playlist` `queue` `remove` `resume` `search` `shuffle` `skip` `skipto` `stop` `volume`\n\n"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.Neon);

        const embed3 = new Discord.MessageEmbed()
      .setTitle('Rank Commands')
      .addField("ㅤ⠀⠀⠀ \n **Rank** | <a:hydroxTrophy:964462897663205376>  **Enabled**","`rank` `leaderboard`\n")
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.Neon);

    const embed4 = new Discord.MessageEmbed()
        .setTitle('Info Commands')
        .addField("ㅤ⠀⠀⠀ \n **Info** ** \n `anime` `avatar` `badges` `botinfo` `country` `invite` `web` `steam` `sourcebin` `whois`  `savatar` `pokemon` `ping`  "
        )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.Neon);

    const embed5 = new Discord.MessageEmbed()
        .setTitle('Image Commands')
        .addField("ㅤ⠀⠀⠀ \n **Image**  \n `grave` `heaven` `triggered` `wasted` `aplica` `bird` `camel` `cat` `dog` `duck` `feed` `fox` `holo` `panda` `slap` `tweet` `gae"
        )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.Neon);

        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Admin Commands')
        .setEmoji('966669962938839081')  
        .setValue('option1')
        .setDescription('Admin Commands ')

        let option2 = new MessageMenuOption()
        .setLabel('Music Commands')
        .setEmoji('966669964817870868')
        .setValue('option2')
        .setDescription('Music Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Rank Commands')
        .setEmoji('966670661332398140')
        .setValue('option3')
        .setDescription('List Rank , Suggest & Fun Commands')

    let option4 = new MessageMenuOption()
        .setLabel('Info Commands')
        .setEmoji('966669964025147432')
        .setValue('option4')
        .setDescription('  i Info Commands')

     let option5 = new MessageMenuOption()
        .setLabel('Image Commands')
        .setEmoji('966669961743442001')
        .setValue('option5')
        .setDescription('  i Info Commands')
        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Neon Jrs Help Menu')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        if(b.values[0] == "option6") {
            Sendmenu.edit(embed6, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit("<a:cross_no2:966674043539435570>  This help menu is expired! Please retype the command to view again.")
    })

    }
  };

////////////////////////////////////////////
//
// ❤️ : Coded By Solar
// 🖤 : Credit's Moon Development
// 💙 : Join For Support
// 🤍 : Invite Neon : https://dsc.gg/neonbot
//
////////////////////////////////////////////