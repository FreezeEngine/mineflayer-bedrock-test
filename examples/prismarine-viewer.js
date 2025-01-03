const mineflayer = require("../../mineflayer-bedrock-public");
const mineflayerViewer = require('prismarine-viewer').mineflayer

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
    version: 'bedrock_1.19.1',
    host: server,
    skipPing: true,
    viewDistance: 5,
    autoInitPlayer: true,
    port: 19132,
    offline: true,
    username: username,
    batchingInterval: batchingInterval,
    skinData: skin_data,
    logging: true
}

const bot = mineflayer.createBot(options)

bot.once('spawn', () => {
    bot.version = '1.19'
    mineflayerViewer(bot, { port: 3000 })

    const path = [bot.entity.position.clone()]
    bot.on('move', () => {
        if (path[path.length - 1].distanceTo(bot.entity.position) > 1) {
            path.push(bot.entity.position.clone())
            bot.viewer.drawLine('path', path)
        }
    })
})