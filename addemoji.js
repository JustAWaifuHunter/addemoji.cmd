const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `BLACK`;

module.exports = {
  name: "addemoji",
  category: "Administrators",
  run: async (client, message, args) => {
  
    if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
 
      return message.channel.send
      
       ("<:No_sabri:882037308453441606> Você não pode utilizar este comando! \n\n <:Info_sabri:882037503022993428> Ei pisiu Caso queira usar esse comando ")
       
    }
    
    const emoji = args[0];

    if (!emoji) return message.channel.send
   
    (`<:errr_sabri:882037933052395570> Desculpe não consegui achar um emoji! \n** <:Info_sabri:882037503022993428> Por favor me envie um emoji existente.**`)
   
 
    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = new MessageEmbed()
     
        .setTitle(`
        <:pasta_sabri:882037719931432990> Eu adicionei o emoji (${name || `${customemoji.name}`})`)
        .setColor("32135a")
        .setDescription(
          ` <:Sim_sabri:882037280628408370> Emoji adicionado com 
          sucesso:\n <:Info_sabri:882037503022993428> Quer ver o emoji de perto? [Click aqui](${Link})`
        );

        return message.channel.send(Added);
      } else {
        let CheckEmoji = parse(emoji, { assetType: "png" });
      return message.channel.send
       
      (`<:errr_sabri:882037933052395570> Desculpe não consegui achar um emoji! \n** <:Info_sabri:882037503022993428> Por favor me envie um emoji existente.**`)
        
        
      
        
    }
  }
};