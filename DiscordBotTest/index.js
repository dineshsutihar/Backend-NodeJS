import { Client, GatewayIntentBits, messageLink } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "Hi From Bot",
  });
});

client.on("interactionCreate", (interaction) => {
  //   console.log(interaction);
  if (interaction.commandName == "ping") return interaction.reply("Pong!!!!");
  if (interaction.commandName == "create") {
    console.log(interaction);
    // const url = interaction.content.split("create")[1];
    return interaction.reply({
      content: "Ruko bhaiya ji chota url banaraha hu iskeliyeh:" + "url",
    });
  }
});

client.login("Client Key Here"); //This will be reseted so use your own token
