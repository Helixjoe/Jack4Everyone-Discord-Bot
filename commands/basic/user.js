const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user.')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')),

    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        // await interaction.reply(`This command was run by ${interaction.user.username}, a very cool person, who joined on ${interaction.member.joinedAt}.`);
        await interaction.reply(interaction.options.getString('input'));
    },
};