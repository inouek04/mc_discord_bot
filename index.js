const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
  const start = [{
    name: "start",
    description: "minecraft server start command"
  }];
  await client.application.commands.set(start, "1096661919659733075")
  console.log('Ready!')
})

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
      return;
  }
  if(interaction.commandName === 'start') {
    await interaction.reply('please wait...');
  }
});


client.login("");
