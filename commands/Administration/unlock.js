const Discord = module.require("discord.js");

module.exports = {
  name: "unlock",
  description: "Unlocks a Channel",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["EMBED_LINKS", "MANAGE_CHANNELS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    message.channel.overwritePermissions([
      {
        id: message.guild.id,
        null: ["SEND_MESSAGES"],
      },
    ]);
    const embed = new Discord.MessageEmbed()
      .setTitle("Channel Updates")
      .setDescription(`<:unlock_dcafe:967039171401240636>  ${message.channel}  has been Unlocked`)
      .setColor("RANDOM");
    await message.channel.send(embed);
    message.delete();
  },
};
