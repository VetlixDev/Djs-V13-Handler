module.exports = {
    name: 'ping',
    description: 'Return Client Ping',
    aliases: ['checkping','p'],
    async execute(Client, message, args, Discord) {
        message.channel.send(`Pong! | Latency: **${Client.ws.ping}**ms!`)
    }
}
