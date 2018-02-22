const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const EVERYONE = "@";
const YouTube = require("simple-youtube-api")
const token = "NDE1NjIwMTE0MTg1MTkxNDI0.DW4pTQ.F-9j01f-3zKB-n0IgagZ93EhdVE";
var client = new Discord.Client();
var prefix = "cg!";

const queue = new Map();

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

var bot = new Discord.Client();

var servers = {};

client.on("ready", () => {
var memberNumber = client.users.size;
var serverNumber = client.guilds.size;

  client.user.setGame("CraftGames | cg!help |", "https://www.twitch.tv/rien")

    
    client.user.setUsername("CraftGame")
    client.user.setStatus("idle");
    console.log("CraftGame'Bot - Connecté");
        
});
client.on("guildMemberAdd", member => {
const channel = member.guild.channels.find('name', 'logs');
if(!channel) {
return;
}

channel.send(`${member.user.username} a rejoint 
${member.guild.name}`);
});
client.on("guildMemberRemove", member => {
const channel = member.guild.channels.find('name', 'logs');
if(!channel) {
return;
}
channel.send(`${member.user.username} a quitté 
${member.guild.name}`);
});
client.on("messageDelete",  function(message) {
if(!message.author.bot){
if(message.guild){
const channel = message.guild.channels.find('name', 'logs');
if(!channel) {
return;
}
 var embed = new Discord.RichEmbed()
channel.send(`message by ${message.member.user.username} deleted in 
${message.channel.name}: ${message.content}`);

}}
});
client.on("messageUpdate",  (message, oldMessage, newMessage) =>  {
if(!message.author.bot){
if(message.guild){
const channel = message.guild.channels.find('name', 'logs');
if(!channel) {
return;
}
var embed = new Discord.RichEmbed()
.addField("message by  ", message.author.username ," a edité " , message.content ," à ", oldMessage)
.setColor("#01A9DB")
}}
});
var Eme32RandomMessage = [
					"Eme32 la meilleur",
					"Eme32 l'immatures xD ",
];
client.on("message", function(message) {
								if (message.content === 'Cc') {
								
												message.reply('Bonjour')
												
												}
								if	 (message.content === 'Cv') {
								
												message.reply('oui , toujour car je suis un robot')
												}
								if(message.content === 'genial le bot') {
            message.channel.sendMessage("Merci, c'est ThePCgaming, mon créateur qui m'a développé ! :D")
        }
        
       if(message.content === 'Eme32') {
       			message.channel.sendMessage(Eme32RandomMessage[Math.floor(Math.random() * Eme32RandomMessage.length)]);
            message.delete();
        }
        if(message.content === 'ThePCgaming') {
            message.reply("On ne juge pas mon créateur! :o")
        }
});

client.on('message', message => {
if(message.content.startsWith(prefix + "yuri")){
message.channel.sendMessage({
        "embed": {
                title: 'yuri',
                url: 'http://rule34.xxx/index.php',
                "image": {
                "url": "http://rule34.xxx/index.php",
                }
            }
        });
}      
   if (message.content.startsWith(prefix + "logout")) {

     if(message.author.id == "290104203026628619"){

      message.channel.send("Arret en cour");

        console.log('/ Je suis desormais offline / ');

        client.destroy();

        process.exit()

    } else {

      message.channel.send("**Erreur** ! Tu n'es pas le createur")

    }
  }


const fs = require("fs");
var msg = message;

if(message.content.startsWith(prefix + "createchannel")){ 
(async function(guild) {
guild.createChannel('new-general', 'text')
  .then(channel => console.log('Created new channel ${channel}'))
  .catch(console.error);
});
}

if(message.content.startsWith(prefix + "menu")){

(async function(member) {

 const mainMessage = await message.channel.send("choisiser vos role");

await mainMessage.react("🎮");
await mainMessage.react("♥");
await mainMessage.react("🔴");

const panier = mainMessage.createReactionCollector((reaction, user) => user.id === message.author.id);
 
panier.on('collect', async(reaction) => 
{
 if (reaction.emoji.name === "🎮") {
 (async function(guild) {
var addRole = member.guild.roles;

member.addRole(member.guild.roles.find("name", "gamer"));

member.guild.createRole({
name: member.user.username,
color: generateHex(),
permission: []
}).then(function(role) {
member.addRole(role);
})});
}
if (reaction.emoji.name === "♥") {
var role2 = member.guild.roles.find("name", "AMOURE");
member.addRole(role2)


 
}
if (reaction.emoji.name === "🔴") {

mainMessage.delete()

 }

 await reaction.remove(message.author.id);

});
 }());
}
if(msg.content.startsWith(prefix + 'mute')){
if(msg.channel.type === 'dm') return;
if(!msg.guild.member(msg.author).hasPermission('ADMINISTRATOR')){
return msg.reply("**:x: Vous n'avez pas la permissions d'utiliser cette commande**").catch(console.error);
}
if(msg.mentions.users.size === 0){
return msg.reply("**:x: Veuillez mentionner l'utilisateur que vous voulez mute**")
}
if(!msg.guild.member(client.user).hasPermission('ADMINISTRATOR')){
return msg.reply("**:x: Je n'ai pas la permission `ADMINISTRATOR` pour mute cet utilisateur**").catch(console.error);
}
let muteMember = msg.guild.member(msg.mentions.users.first());
if(!muteMember){
return msg.channel.send("**:x: Cet utilisateur n'est certainement pas valide**")
}

msg.channel.overwritePermissions(muteMember, {SEND_MESSAGES: false}).then(member => {
msg.channel.send(`**${member.user.username}** a bien Ã©tÃ© mute**`);
})
}
if(msg.content.startsWith(prefix + 'unmute')){
if(msg.channel.type === 'dm') return;
if(!msg.guild.member(msg.author).hasPermission('ADMINISTRATOR')){
return msg.reply("**:x: Vous n'avez pas la permissions d'utiliser cette commande**").catch(console.error);
}
if(msg.mentions.users.size === 0){
return msg.reply("**:x: Veuillez mentionner l'utilisateur que vous voulez unmute**")
}
if(!msg.guild.member(client.user).hasPermission('ADMINISTRATOR')){
return msg.reply("**:x: Je n'ai pas la permission `ADMINISTRATOR` pour unmute cet utilisateur**").catch(console.error);
}
let unmuteMember = msg.guild.member(msg.mentions.users.first());
if(!unmuteMember){
return msg.channel.send("**:x: Cet utilisateur n'est certainement pas valide**")
}
msg.channel.overwritePermissions(unmuteMember, {SEND_MESSAGES: true}).then(member => {
msg.channel.send(`**${member.user.username}** a bien Ã©tÃ© unmute**`);
})
}
});
bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "bienvenue")
    var embed = new Discord.RichEmbed()
    .sendMessage(member.toString() + " Bienvenue sur le discord de **CookizGame* ! -  N'hésite pas à faire la commande .help :D");
    member.addRole(member.guild.roles.find("name", "Membre"));

});    
           
client.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args2.slice(1).join(" ");
    
    var reasontimed = args2.slice(2).join(' ')


    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var roleJoueur= member.guild.roles.find("name", "Membres")
    
    var roleMute = member.guild.roles.find("name", " Mute")
    
    var modlog = member.guild.channels.find("name", "logs")
    

    
    var user = message.mentions.users.first();
    
    const serverQueue = queue.get(message.guild.id);

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    
    switch (args[0].toLowerCase()) {
        case "membres":
            message.reply("Nous sommes " + (bot.users.size - 5) + " membres sur le discord !");
        break;
        case "version":
        message.reply("Le server est actuellement en Minecraft Bedrock Édition 1.2.10.");
        break;
        case "discord":
        message.channel.sendMessage("Hey!Je te présente le server CraftGames ! un server Minecraft Bedrock Édition 1.2.10! En développement ! Avec notre propre BOT!  Je t'invite a le rejoindre ! - https://discord.gg/SA6dzcT CraftGames est un server Mini jeux !");
        break;



        /*case "mute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu n'as pas la permission.");
        if(!modlog) return message.reply("Je ne trouve pas de channel logs.");  
        let time = parseInt(args2[1]) * 60000;
        if(!time) return message.reply("Tu as oublier de mettre le  temps.")
        if (!reasontimed) return message.reply("Tu as oublier de mettre la raison.")
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Tu as oublié de mettre qui je dois Mute.")
        message.channel.sendMessage(member.toString() + " a bien été mute. ")
        member.addRole(roleMute)
        setTimeout(() => { member.removeRole(roleMute); }, time);

        var embed = new Discord.RichEmbed()
        .addField("Action :", "Mute")
        .addField("Utilisateur :", user.toString())
        .addField("Modérateur :", message.author.toString())
        .addField("Raison :", reasontimed)
        .addField("Temps :", args2[1] + " minute(s)")
        .setColor(0x808000)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "logs").sendEmbed(embed);
        break;
        */
            case "help":
            var embed = new Discord.RichEmbed()
            
          .setThumbnail('https://cdn.discordapp.com/attachments/415615542930702339/415616876111069184/JPEG_20180219_205843.jpg')
            .addField("cg!afk", "Cette commande permet de vous mettre afk ! Pour l'utiliser, faites cg!afk (raison)")
            .addField("cg!remafk", "Cette commande permet de vous enlevez le afk")
            .addField("cg!ban", "Cette commande permet de bannir un utilisateur ! Pour l'utiliser, faites cg!ban @(utilisateur) (raison)")
                .addField("cg!kick", "Cette commande permet de kick un utilisateur ! Pour l'utiliser, faite cg!kick @(utilisateur) (raison)")
                .addField("cg!clear", "Cette commande permet de supprimer des messages beaucoup plus rapidement ! Pour l'utiliser, faites cg!clear (nombredemessages)")
                .addField("cg!mute", "Cette commande permet de muté un utilisateur pendant un certain temps. Pour l'utiliser, faites cg!mute @(utilisateur) (temps) (raison)")
                .addField("cg!unmute", "Cette commande permet d'unmute un utilisateur. Pour l'utiliser, faites cg!unmute @(utilisateur)")
                .addField("cg!ping", "Grâce à cette commande, tu pourras savoir ton ping !")            
                .addField("cg!userinfo", "Informations sur un utilisateur ! cg!userinfo @(utilisateur)")
                .addField("cg!serverinfo", "Informations sur le serveur !")

                .setColor("#01A9DB")
                .setFooter("Idée de commande propose en MP à ThePCgaming")
                .setAuthor(message.author.username, message.author.avatarURL)
                .setDescription("Voici les commandes du bot")
                .setTimestamp()
                message.delete()
                message.author.send(embed);
                message.channel.send(message.author.toString() + " je t'ai envoyé les commandes en mp !")
            break;
            /*case "unmute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu n'a pas la permission de unmute ");
        if(!modlog) return message.reply("Je ne trouve pas de channel logs.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Tu a oublier de mettre à qui j'enleve le mute")
        member.removeRole(roleMute)
        message.channel.sendMessage(user.toString() + " a bien été unmute ")
        
        var embed = new Discord.RichEmbed()
        .addField("Commande :", "UNMUTE")
        .addField("Utilisateur :", user.username)
        .addField("Modérateur :", message.author.username)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#01A9DB")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "logs").sendEmbed(embed);
        break;*/
            case "grade":
            var embed = new Discord.RichEmbed()
                
                .addField("Owner", "Grade réservé aux créateur du server discord")
                .addField("Amis", "Grade est reserve a se qui modere")
                .addField("Membre", "Grade de base, tout le monde l'a ! Même Cookiz :o !")
                .setColor("##01A9DB")
                .setDescription("Voici les grades disponible sur ce discord **POUR LE MOMENT**.")
                .setColor("#01A9DB")
                message.delete()
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            message.channel.sendEmbed(embed);
            break;

        case "kick":
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu n'a pas la permission de kick.");
            if(!modlog) return message.reply("Je ne trouve pas de channel logs.");
            if (reason.length < 1) return message.reply("Tu as oublié de mettre la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu n'as pas mis son pseudo au complet")
            message.guild.member(user).kick();
            message.channel.send(user.toString() + " a bien été kick ")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "KICK")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "logs").sendEmbed(embed);381242462053728267
            bot.channels.get('373240336169828353').sendMessage("Le joueur " + user.username + " à bien été kick pour: " + reason);
       
            message.delete();
            break;
        case "ban":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel logs.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois bannir..")
            
            message.guild.ban(user, 2);
            message.channel.send(user.toString() + " a bien été banni")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "BAN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "logs").sendEmbed(embed);
            
            bot.channels.get('373240336169828353').sendMessage(" Le joueur " + user.username + " à bien été kick pour: " + reason);
            
            message.delete();
            break;
        case "clear":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            var messagecount = parseInt(args2.join(" "));
            if(!messagecount) return message.channel.send("Tu dois mettre un certain nombre de messages.")
            message.channel.fetchMessages({
                limit: messagecount
            }).then(messages => message.channel.bulkDelete(messagecount));
                        message.delete()
            var embed = new Discord.RichEmbed()
            .addField("Commande :", "CLEAR")
            .addField("Modérateur :", message.author.username)
            .addField("Message supprimé", messagecount)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setFooter("Ouf ! Sa as fait un bon ménage dans le channel ! ^^")
            message.delete()
            member.guild.channels.find("name", "logs").sendEmbed(embed);
            break;


       
       
    
       message.delete();
       break;
       
       case "twitter":
       message.reply("Jetez un coup d'œil à CraftGamesgem (@CraftGamesBE) : https://twitter.com/CraftGamesBE?s=09");
       break;


       case "ping":
        message.channel.sendMessage("Tu as actuellement `" + bot.ping + " ms ");
        message.delete();
        break;
         
        case "youtube":
var embed = new Discord.RichEmbed()
       
            case "serverinfo":
            var embed = new Discord.RichEmbed()
            .setAuthor("informations sur le serveur " + message.guild.name)
            .setThumbnail('https://cdn.discordapp.com/attachments/415615542930702339/415616876111069184/JPEG_20180219_205843.jpg')
            .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
            .addField("Membres", message.guild.memberCount)
            .addField("Channels", message.guild.channels.filter(chan => chan.type === "voice").size + " channels vocaux " + message.guild.channels.filter(chan => chan.type === "text").size + " channels textuels")
            .addField("Serveur créer le", message.guild.createdAt)
            .addField("Roles", message.guild.roles.map(role => role.name).join(", "))
            message.channel.sendEmbed(embed)
            break;
            case "userinfo":
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser de qui je dois montrer les informations.")
            var embed = new Discord.RichEmbed()
                .addField("Pseudo", user.username)
                .addField("Ashtag", user.discriminator)
                .addField("ID", user.id)
                .addField("Compte créer le", user.createdAt)
                .setThumbnail(user.avatarURL)
                .setColor(0xff80ff)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setFooter("Voilà.", message.author.avatarURL)
                .setTimestamp()
            message.channel.sendEmbed(embed);
            break;
               
            
            
            
            /* Pariel */
            
            
            
            
            
            
            message.channel.sendMessage("Commande invalide ^^ Fait /help pour voir toutes les commandes disponibles !")
    }
});

client.login(token)







