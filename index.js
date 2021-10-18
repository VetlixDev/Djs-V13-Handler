const Discord = require('discord.js'); // Discord.js V13 Package
const mongoose = require('mongoose'); // Require Mongoose
const { BOT_TOKEN, PREFIX, mongoString } = require('./config.json'); // Get Bot information from config.json
const Client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGES],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true }
}); // Defined Clients w/Intents
const prefix = PREFIX; // Got out Bot Prefix

// Collections
Client.commands = new Discord.Collection();
Client.events = new Discord.Collection();
Client.slashCmds = new Discord.Collection();
module.exports = Client;

['cmd_handler','event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(Client, Discord);
})

mongoose.connect(mongoString, {
    userNewUrlParser: true,
    useUnifiesTopology: true
}).then(() => {
    console.log('Connected to Database!');
});


Client.login(BOT_TOKEN) // Login into Bot