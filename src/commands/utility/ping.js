const { SlashCommandBuilder } = require("discord.js");
const WORD_LIST = require("../../wordList");

function getRandomWord() {
  const length = WORD_LIST.wordlist.words.length;
  const randomNumber = Math.floor(Math.random() * length);

  const randomWord = WORD_LIST.wordlist.words[randomNumber];

  return {
    word: randomWord.word,
    meaning: randomWord.sense.definition,
  };
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("random")
    .setDescription("Replies with a random GRE word with meaning and example"),
  async execute(interaction) {
    const word = getRandomWord();
    await interaction.reply(`**Word**: ${word.word}
**Meaning**: ${word.meaning}`);
  },
};
