# Olá tudo bem?


-Hoje voltei com um novo comando o "addemoji"



-Como funciona? Ao execultar o comando o bot pegará o emoji dito pelo -user(com nitro você pode usar emojis de outros serves)

## Modulos necessários

[discord.js(npm i discord.js)](https://www.npmjs.com/package/discord.js?source=post_page-----7b5fe27cb6fa----------------------)

[twemoji-parser(nom i twemoji-parser)](https://www.npmjs.com/package/twemoji-parser)

# Cod

const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `BLACK`;
//Criado por Pani Kaz#8893
module.exports = {
 name: "addemoji",
 category: "Administrators",
 run: async (client, message, args) => {
 
 if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
 
 return message.channel.send
 
 (":No_sabri: Você não pode utilizar este comando! \n\n :Info_sabri: Ei pisiu Caso queira usar esse comando ")
 
 }
 
 const emoji = args[0];

 if (!emoji) return message.channel.send
 
 (`<:errr_sabri:882037933052395570> Desculpe não consegui achar um emoji! \n** <:Info_sabri:882037503022993428> Por favor me envie um emoji existente.**`)
 
 // Comando de sabrina a majestosa
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
 :pasta_sabri: Eu adicionei o emoji (${name || `${customemoji.name}`})`)
 .setColor("32135a")
 .setDescription(
 ` :Sim_sabri: Emoji adicionado com 
 sucesso:\n :Info_sabri: Quer ver o emoji de perto? [Click aqui](${Link})`
 );

 return message.channel.send(Added);
 } else {
 let CheckEmoji = parse(emoji, { assetType: "png" });
 return message.channel.send
 
 (`<:errr_sabri:882037933052395570> Desculpe não consegui achar um emoji! \n** <:Info_sabri:882037503022993428> Por favor me envie um emoji existente.**`)
 
 
 
 
 }
 }
}; 

## Importante

-Não é obrigatorio dar creditos!

-Mudar os emojis para não dar erro!

-Não falar que é o criador do cod

-Lembre de instalar as Dependências