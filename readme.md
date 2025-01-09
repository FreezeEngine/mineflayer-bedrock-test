This repo contains some testing for mineflayer-bedrock, so it requires "mineflayer-bedrock-public" from bedrock branch folder.
This is also just proof of concept to get things moving and is not a final product!

It was made 7 month ago and tested on 1.18-1.19.1 protocols regarding entities (some packet fields changed names and it accounts for that(tho requires more testing everywhere))

1. Put "mineflayer-bedrock-public" and "mineflayer-bedrock-test" in one folder \["mineflayer-bedrock-test", "mineflayer-bedrock-public"];
2. Run npm install (might require running npm install in both folders!)
3. Start index.js

it will also require more setup: it won't work out of the box because minecraft-data for bedrock does not have some info physics relies on, BUT you can "patch" it:
1. Locate prismarine-physics folder in mineflayer-bedrock-public node_modules
2. Open index.js
3. Change line 83 from
```js
movementSpeedAttribute: mcData.attributesByName.movementSpeed.resource,
````
to
```js
movementSpeedAttribute: mcData.attributesByName ? mcData.attributesByName.movementSpeed.resource : 'minecraft:movement_speed',
```

Known issues:
A lot of things wasn't tested on 1.20 AND minecraft-data doesn't have blockstates for 1.19.1+ SO physics WON'T work properly (bot will fall thruough the world). BUT you can check how it works on 1.18 or 1.19.1