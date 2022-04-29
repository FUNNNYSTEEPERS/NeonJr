const { Message, Client } = require("discord.js");
const { FastType } = require('weky')

module.exports = {
    name: "fasttype",
    category: "Discord Games",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {
        await FastType({
            message: message,
            embed: {
                title: 'FastType',
                description: 'You have **{{time}}** to type the below sentence.',
                color: '#5865F2',
                footer: '@Neon | n/',
                timestamp: true
            },
            sentence: 'This is a sentence!',
            winMessage: 'GG, you have a wpm of **{{wpm}}** and You made it in **{{time}}**.',
            loseMessage: 'Better luck next time!',
            cancelMessage: 'You ended the game!',
            time: 60000,
            buttonText: 'Cancel',
            othersMessage: 'Only <@{{author}}> can use the buttons!'
        });


    }
}