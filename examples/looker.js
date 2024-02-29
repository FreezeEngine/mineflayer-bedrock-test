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
  version: 'bedrock_1.19.1',
  host: server,
  skipPing: true,
  viewDistance: 5,
  autoInitPlayer: true,
  port: 61696,
  offline: true,
  username: username,
  batchingInterval: batchingInterval,
  skinData: skin_data,
  logging: true
}

const bot = mineflayer.createBot(options)


bot.on('physicsTick', () => {
  const filter = e => e.position.distanceTo(bot.entity.position) < 16 && e.type === 'player'
  const entity = bot.nearestEntity(filter)

  if (entity !== null) {
    bot.lookAt(entity.position.offset(0, 0.62, 0))
  }
})

