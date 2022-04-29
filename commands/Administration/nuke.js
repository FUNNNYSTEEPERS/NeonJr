module.exports = {
    name: "nuke",
    description: "nuke",
     botPerms: ["ADMINISTRATOR"],
    userPerms: ["ADMINISTRATOR"],
             run: async(client, message, args) => {
        const channeltonuke =message.mentions.channels.first() || message.channel;
      message.channel.send(`Nuking ${channeltonuke}`);
            const position = message.channel.position;
            const newChannel = await message.channel.clone();
            await message.channel.delete();
            newChannel.setPosition(position);
      newChannel.send(`Channel Nuked by ${message.member}`).then((msg) => msg.delete({ timeout: 20000 }));
            return newChannel.send("https://cdn.dribbble.com/users/22930/screenshots/4108987/nuke_man_dribbble.gif").then((msg) => msg.delete({ timeout: 20000 }));
   }
}