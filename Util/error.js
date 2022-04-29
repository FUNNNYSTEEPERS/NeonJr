const { MessageEmbed } = require("discord.js")

/**
 * Easy to send errors because im lazy to do the same things :p
 * @param {String} text - Message which is need to send
 * @param {TextChannel} channel - A Channel to send error
 */
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setDescription(text)
    await channel.send(embed)
}

////////////////////////////////////////////
//
// ❤️ : Coded By Solar
// 🖤 : Credit's Moon Development
// 💙 : Join For Support
// 🤍 : Invite Neon : https://dsc.gg/neonbot
//
////////////////////////////////////////////