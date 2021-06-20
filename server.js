var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "ODU1OTc5MzE3NTY1NDU2Mzk1.YM6W3A.cu5pw0VGMItcS-cL9TzFHFPZ6yA",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "Loyalty",
  type: "PLAYING",
  time: 12
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "D!",
 warn: "0"
})

 //commands handler
var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}


