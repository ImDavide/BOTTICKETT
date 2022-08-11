const { MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require("discord-buttons");
const config = require('../../config.json')
module.exports = {
    name: 'aconnect',

    run: async (client, message, args, member) => {
        message.delete();
        const perm = new MessageEmbed()
            .setDescription(`<:a_icon_no:997448681131356301> ${message.author} You are not **allowed** to use this command.`)
            .setColor("#2f3136")

        if (!message.member.hasPermission(`MANAGE_MESSAGES`)) {
            return message.channel.send(perm)
        }

        const embed = new MessageEmbed()
            .setAuthor(`${message.guild.name} | Tickets`, config.server.imagemserver, 'https://discord.gg/sxd')
            .setDescription(` <a:dot:1007392545258610708> To open **TICKET** press one of the buttons below!`)
            .setColor("#2f3136")
            .setFooter("Remember, do not open a ticket unnecessarily.")

            const ticket = new MessageButton()
            .setLabel('Social')
            .setStyle('grey')
            .setEmoji('1007387429604446358')
            .setID('suporte')

            const negro = new MessageButton()
            .setLabel('Member')
            .setStyle('grey')
            .setEmoji('1007378226114465872')
            .setID('negro')
            
            const negrissimo = new MessageButton()
            .setLabel('Boost')
            .setStyle('grey')
            .setEmoji('1007391176581713990')
            .setID('negrissimo')

        const buttons = new MessageActionRow().addComponents(ticket, negro, negrissimo)

        message.channel.send({
            components: [buttons],
            embed: embed
        })
    }
}