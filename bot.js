const Discord = require("discord.js");
const client = new Discord.Client();
var rotation = "1-2-3";

// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "raid")) {
    rotation = "1-2-3";
    message.channel.send(rotation);
  } else
  if (message.content.startsWith(prefix + "n")) {
    if (rotation == "1-2-3") rotation = "2-3-1";
    else if (rotation == "2-3-1") rotation = "3-1-2";
    else rotation = "1-2-3";
    message.channel.send(rotation);
  }
});

client.login(process.env.BOT_TOKEN);
