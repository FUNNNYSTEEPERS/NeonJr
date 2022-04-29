const { readdirSync } = require("fs")

module.exports = (bot) => {
    const load = dirs => {    
        const events = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of events) {
            const evt = require(`../events/${dirs}/${file}`);
            let eName = file.split('.')[0];
            bot.on(eName, evt.bind(null, bot));
          };
        };
        ["Client"].forEach(x => load(x));
};

////////////////////////////////////////////
//
// ❤️ : Coded By Solar
// 🖤 : Credit's Moon Development
// 💙 : Join For Support
// 🤍 : Invite Neon : https://dsc.gg/neonbot
//
////////////////////////////////////////////