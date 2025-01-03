const mineflayer = require("../../mineflayer-bedrock-public");

const { readFileSync} = require('fs')

function loadJsonFromFileSync(path) {
    try {
        // Read the JSON file synchronously
        const jsonData = readFileSync(path, 'utf8');

        // Parse the JSON data
        return JSON.parse(jsonData);
    } catch (error) {
        console.error('Error loading JSON:', error);
        return null;
    }
}

const username = 'Bot'
const server = 'localhost'
const batchingInterval = 50
const skin_data = loadJsonFromFileSync('../minecraft/skins/bot_skin_data.json')

options = {
    version: 'bedrock_1.21.50',
    host: server,
    skipPing: true,
    viewDistance: 5,
    autoInitPlayer: true,
    port: 63127,
    offline: true,
    username: username,
    batchingInterval: batchingInterval,
    skinData: skin_data,
    logging: true,
    physicsEnabled: false
}

const bot = mineflayer.createBot(options)

bot.on('login', () => {
    console.log("Login")

})

bot.on('game', () => {
    console.log("bot.spawnPoint: " + bot.spawnPoint)
})

bot.on('particle', (particle) => {
    console.log("Particle: " + JSON.stringify(particle))
})

bot.on('rain', () => {
    console.log("rain isRaining: " + bot.isRaining)
})

bot.on('weatherUpdate', () => {
    console.log("weatherUpdate thunderState: " + bot.thunderState)
})

bot.on('breath', () => {
    console.log("oxygenLevel: " + bot.oxygenLevel)
})

bot.on('experience', () => {
    console.log("bot.experience: " + JSON.stringify(bot.experience))
})

bot.on('death', () => {
    console.log("bot died")
})

bot.on('spawn', () => {
    console.log("bot spawned")
})

bot.on('health', () => {
    console.log("bot.health: " + bot.health)
    console.log("bot.food: " + bot.food)
    console.log("bot.foodSaturation: " + bot.foodSaturation)
    console.log("bot.isAlive: " + bot.isAlive)
})

bot.on('respawn', () => {
    console.log("RESPAWN")
    bot.respawn();
})

bot.on('chat', (username, message) => {
    console.log([username, message])
})

bot.on('message', (message, type, sender, verified) => {
    console.log([message, type, sender, verified])
})

// bot.on('entityGone', (entity) => {
//     console.log("Entity Gone: " + JSON.stringify(entity))
// })
//
// bot.on('entityAttach', (entity, vehicle) => {
//     console.log("Entity Attach: " + JSON.stringify(entity))
// })
//
// bot.on('playerJoined', (player) => {
//     console.log("Player Joined: " + JSON.stringify(player))
// })
//
// bot.on('playerLeft', (player) => {
//     console.log("Player Left: " + JSON.stringify(player))
// })

// bot.on('entityGone', (entity) => {
//     console.log("Entity Gone: " + JSON.stringify(entity))
// })



