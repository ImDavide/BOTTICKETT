const Discord = require("discord.js");
const sourcebin = require('sourcebin_js');
const { MessageButton } = require("discord-buttons")

const config = require('../../config.json')
const sleep = require('../utils/sleep')

var claimer = 0
module.exports = async (client, button) => {
   const logticket2 = button.message.guild.channels.cache.find(channel => channel.name === `log`)
 
  // ============= ABRIR O TICKET =============
  if (button.id == 'suporte') {

    await button.reply.defer()

    const retorno = new Discord.MessageEmbed()

      .setDescription(`<@${button.clicker.user.id}> You already have an open ticket.`)
      .setColor("#2f3136")

    const channels = (await button.guild.channels.cache.find((c) => c.topic === `Member ID・${button.clicker.user.id}`))
    if (channels) return button.message.lineReply(retorno).then(message => message.delete({ timeout: 10000 }))

    var currentdate = new Date();
    var horar = "" + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " | " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    button.message.guild.channels.create(`🤳・Social-${button.clicker.user.username}`, { /* ${button.clicker.user.username} */
      parent: (config.ticket.idcategoriaticket),
      topic: `Member ID・${button.clicker.user.id}`,
      permissionOverwrites: [
        {
          id: button.clicker.user.id,
          allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ATTACH_FILES'],
        },
        {
          id: button.guild.roles.cache.get(config.ticket.idcargoticket1),
          allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        },
        {
          id: button.guild.roles.cache.get(config.ticket.idcargoticket2),
          allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        },
        {
          id: button.guild.roles.cache.get(config.ticket.idcargoticket3),
          allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        },
        {
          id: button.guild.roles.everyone,
          deny: ['VIEW_CHANNEL'],
        },
      ],
      type: 'text',
    }).then(async channel => {
      const user = (await (button.guild?.members.fetch({ user: button.clicker.user }))).hasPermission("MANAGE_MESSAGES")
      const ticket = new Discord.MessageEmbed()

      .setDescription(`<a:yes:1007378260453232702> | <@${button.clicker.user.id}> Your ticket has been created in the channel: <#${channel.id}>`, {ephemeral: true})
        .setColor("#2f3136")
        
      button.message.lineReply(ticket).then(message => message.delete({ timeout: 10000 }))

      channel.send(`<@${button.clicker.user.id}> - <@&1007216032420728882>`)

      const embedd = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle(` <:info:1007383928723746868> \`TICKET SOCIAL BOOST\` openened by ${button.clicker.user.username} `)
      .setDescription(`<:logout:1007393585123041340> If u want to **CLOSE** ticket, press <:trash:1007393569436352602> **Close Ticket**`)
      const ticketf = new MessageButton()
        .setLabel('Close Ticket')
        .setStyle('red')
        .setEmoji('1006177492329037895')
        .setID('fecharticket');

      const exx = new MessageButton()
        .setLabel('Settings Staff')
        .setStyle('grey')
        .setEmoji('1006176564125372477')
        .setID('extr')

      const claim = new MessageButton()
        .setLabel('Claim Ticket')
        .setStyle('grey')
        .setEmoji('1006187077022527579')
        .setID('cl')

      const sair = new MessageButton()
        .setLabel('Exit The Ticket')
        .setStyle('grey')
        .setEmoji('1006160733249212536')
        .setID('sair')

      channel.send({
        buttons: [ticketf, exx, claim, sair],
        embed: embedd
      })
    });
  }

//"""""""//
if (button.id == 'negro') {

  await button.reply.defer()

  const retorno = new Discord.MessageEmbed()

    .setDescription(`<@${button.clicker.user.id}> You already have an open ticket.`)
    .setColor("#2f3136")

  const channels = (await button.guild.channels.cache.find((c) => c.topic === `Member ID・${button.clicker.user.id}`))
  if (channels) return button.message.lineReply(retorno).then(message => message.delete({ timeout: 10000 }))

  var currentdate = new Date();
  var horar = "" + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " | " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

  button.message.guild.channels.create(`👥・member-${button.clicker.user.username}`, { /* ${button.clicker.user.username} */
    parent: (config.ticket.idcategoriaticket2),
    topic: `Member ID・${button.clicker.user.id}`,
    permissionOverwrites: [
      {
        id: button.clicker.user.id,
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ATTACH_FILES'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket1),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket2),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket3),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.everyone,
        deny: ['VIEW_CHANNEL'],
      },
    ],
    type: 'text',
  }).then(async channel => {

    const ticket = new Discord.MessageEmbed()

    .setDescription(`<a:yes:1007378260453232702> | <@${button.clicker.user.id}> Your ticket has been created in the channel: <#${channel.id}>`, {ephemeral: true})
      .setColor("#2f3136")

    button.message.lineReply(ticket).then(message => message.delete({ timeout: 10000 }))

    channel.send(`<@${button.clicker.user.id}> - <@&1007216032420728882>`)

    const embedd = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle(` <:info:1007383928723746868>  \`TICKET MEMBER BOOST\` openened by ${button.clicker.user.username} `)
      .setDescription(`<:logout:1007393585123041340> If u want to **CLOSE** ticket, press <:trash:1007393569436352602> **Close Ticket**`)

    const ticketf = new MessageButton()
      .setLabel('Close Ticket')
      .setStyle('red')
      .setEmoji('1006177492329037895')
      .setID('fecharticket');

    const exx = new MessageButton()
      .setLabel('Settings Staff')
      .setStyle('grey')
      .setEmoji('1006176564125372477')
      .setID('extr')

    const claim = new MessageButton()
      .setLabel('Claim Ticket')
      .setStyle('grey')
      .setEmoji('1006187077022527579')
      .setID('cl')

    const sair = new MessageButton()
      .setLabel('Exit The Ticket')
      .setStyle('grey')
      .setEmoji('1006160733249212536')
      .setID('sair')

    channel.send({
      buttons: [ticketf, exx, claim, sair],
      embed: embedd
    })
  });
}

// =============== NEGRO ===================== //
//"""""""//
if (button.id == 'negrissimo') {

  await button.reply.defer()

  const retorno = new Discord.MessageEmbed()

    .setDescription(`<@${button.clicker.user.id}> You already have an open ticket.`)
    .setColor("#2f3136")

  const channels = (await button.guild.channels.cache.find((c) => c.topic === `Member ID・${button.clicker.user.id}`))
  if (channels) return button.message.lineReply(retorno).then(message => message.delete({ timeout: 10000 }))

  var currentdate = new Date();
  var horar = "" + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " | " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

  button.message.guild.channels.create(`🚀・boost-${button.clicker.user.username}`, { /* ${button.clicker.user.username} */
    parent: (config.ticket.idcategoriaticket3),
    topic: `Member ID・${button.clicker.user.id}`,
    permissionOverwrites: [
      {
        id: button.clicker.user.id,
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ATTACH_FILES'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket1),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket2),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket3),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.everyone,
        deny: ['VIEW_CHANNEL'],
      },
    ],
    type: 'text',
  }).then(async channel => {

    const ticket = new Discord.MessageEmbed()

      .setDescription(`<a:yes:1007378260453232702> | <@${button.clicker.user.id}> Your ticket has been created in the channel: <#${channel.id}>`, {ephemeral: true})
      .setColor("#2f3136")

    button.message.lineReply(ticket).then(message => message.delete({ timeout: 10000 }))

    channel.send(`<@${button.clicker.user.id}> - <@&1007216032420728882>`)

    const embedd = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle(` <:info:1007383928723746868>  \`TICKET NITRO BOOST\` openened by ${button.clicker.user.username} `)
    .setDescription(`<:logout:1007393585123041340> If u want to **CLOSE** ticket, press <:trash:1007393569436352602> **Close Ticket**`)
     

    const ticketf = new MessageButton()
      .setLabel('Close Ticket')
      .setStyle('red')
      .setEmoji('1006177492329037895')
      .setID('fecharticket');

    const exx = new MessageButton()
      .setLabel('Settings Staff')
      .setStyle('grey')
      .setEmoji('1006176564125372477')
      .setID('extr')

    const claim = new MessageButton()
      .setLabel('Claim Ticket')
      .setStyle('grey')
      .setEmoji('1006187077022527579')
      .setID('cl')

    const sair = new MessageButton()
      .setLabel('Exit The Ticket')
      .setStyle('grey')
      .setEmoji('1006160733249212536')
      .setID('sair')

    channel.send({
      buttons: [ticketf, exx, claim, sair],
      embed: embedd
    })
  });
}
  // ============= Settings Staff =============

  if (button.id == 'extr') {

    await button.reply.defer()

    const perm = new Discord.MessageEmbed()

      
      .setDescription(` <:error:1006192523842175017> | You are not allowed`)
      .setColor("#990000")

    const user = (await (button.guild?.members.fetch({ user: button.clicker.user }))).hasPermission("MANAGE_MESSAGES")
    if (!user) {
      return button.channel.send(perm).then(message => message.delete({ timeout: 10000 }))
    }

    const extra = new Discord.MessageEmbed()

      .setTitle('Extra Staff | Ticket')
      .setDescription('Staff Settings')
      .setColor("#2f3136")

    const add = new MessageButton()
      .setLabel('Add Member')
      .setStyle('grey')
      .setEmoji('1006160796763557972')
      .setID('addm')

    const rem = new MessageButton()
      .setLabel('Remove Member')
      .setStyle('grey')
      .setEmoji('1006160795786297424')
      .setID('remm')

    const renom = new MessageButton()
      .setLabel('Rename Channel')
      .setStyle('grey')
      .setEmoji('1006176127074713640')
      .setID('renomm')

    const tickets = new MessageButton()
      .setLabel('Create Support Channel')
      .setStyle('grey')
      .setEmoji('1006175929539760128')
      .setID('call')

    button.channel.send({
      buttons: [add, rem, renom, tickets],
      embed: extra
    }).then(message => message.delete({ timeout: 40000 }))
  }

  // ============= BOTÃO DE ASSUMIR O TICKET =============

  if (button.id == 'cl') {

    await button.reply.defer()

    const perm = new Discord.MessageEmbed()

    .setDescription(` <:error:1006192523842175017> | You are not allowed`)
    .setColor("#990000")

    const user = (await (button.guild?.members.fetch({ user: button.clicker.user }))).hasPermission("MANAGE_MESSAGES")
    if (!user) {
      return button.channel.send(perm).then(message => message.delete({ timeout: 10000 }))
    }

    let channel2 = button.message.channel.topic
    channel2 = channel2.split("・")[1]
    const user3 = client.users.cache.get(channel2)

    claimer = button.clicker.user.id;

    const pv = new Discord.MessageEmbed()

      .setDescription(`A staff member claim your ticket.\n Click to view the ticket: ${button.message.channel}`)
      .setColor("#2f3136")

    user3.send(pv)

    const embedd = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle(button.guild.name + ' | TICKET')
      .setDescription(`Hi!\nThanks for opening ticket, please write here what you need! Claimed by ${claimer}`)

    const ticketf = new MessageButton()
      .setLabel('Close Ticket')
      .setStyle('red')
      .setEmoji('1006177492329037895')
      .setID('fecharticket')

    const exx = new MessageButton()
      .setLabel('Settings Staff')
      .setStyle('grey')
      .setEmoji('1006176564125372477')
      .setID('extr')

    const sair = new MessageButton()
      .setLabel('Exit The Ticket')
      .setStyle('grey')
      .setEmoji('1006160733249212536')
      .setID('sair')

    button.message.edit({
      buttons: [ticketf, exx, sair],
      embed: embedd
    })
  }

  // ============= SAIR DA SALA =============

  if (button.id == 'sair') {

    await button.reply.defer()

    let channel2 = button.message.channel.topic
    channel2 = channel2.split("・")[1]
    const user4 = client.users.cache.get(channel2)

    button.message.channel.overwritePermissions([
      {
        id: user4,
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ATTACH_FILES'],
      },
      {
        id: button.clicker.user.id,
        deny: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ATTACH_FILES'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket1),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket2),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket3),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.everyone,
        deny: ['VIEW_CHANNEL'],
      },
    ])

    const saiu = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setDescription(`<@${button.clicker.user.id}> exited the ticket.`)

    button.message.channel.send(saiu).then(message => message.delete({ timeout: 10000 }))
  }

  // ============= CRIAR UM CANAL DE SUPORTE NO TICKET =============

  if (button.id == 'call') {

    await button.reply.defer()

    const perm = new Discord.MessageEmbed()

    .setDescription(` <:error:1006192523842175017> | You are not allowed`)
    .setColor("#990000")

    const user = (await (button.guild?.members.fetch({ user: button.clicker.user }))).hasPermission("MANAGE_MESSAGES")
    if (!user) {
      return button.channel.send(perm).then(message => message.delete({ timeout: 10000 }))
    }

    let channel2 = button.message.channel.topic
    channel2 = channel2.split("・")[1]
    const user2 = client.users.cache.get(channel2)

    button.message.guild.channels.create(`🎤・support-${button.clicker.user.username}`, {
      parent: (config.ticket.idcategoriaticket2),
      permissionOverwrites: [
        {
          id: user2,
          allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ATTACH_FILES'],
        },
        {
          id: button.guild.roles.cache.get(config.ticket.idcargoticket1),
          allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        },
        {
          id: button.guild.roles.cache.get(config.ticket.idcargoticket2),
          allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        },
        {
          id: button.guild.roles.cache.get(config.ticket.idcargoticket3),
          allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
        },
        {
          id: button.guild.roles.everyone,
          deny: ['VIEW_CHANNEL'],
        },
      ],
      type: 'voice',
    }).then(async channel => {

      const voz = new Discord.MessageEmbed()

        .setDescription(`<@${button.clicker.user.id}> Your voice channel: ${channel}`)
        .setColor("#2f3136")

      button.message.lineReply(voz).then(message => message.delete({ timeout: 10000 }))

      await sleep(15000)

      setInterval(async () => {
        try {
          if (channel.members.size <= 0) {
            await channel.delete()
          }
        } catch (error) {
          return
        }
      }, 5000)
    })
  }

  //log + chiusura

  if (button.id == 'fcticket') {

    await button.reply.defer()

    let channel2 = button.message.channel.topic
    channel2 = channel2.split("・")[1]
    const user = client.users.cache.get(channel2)

    clic = button.clicker.user.id;

    var currentdate = new Date();
    var datetime = "" + currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " | "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();

    const embedd = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setDescription(`The ticket will be deleted in 5 seconds.`)

    const embed4 = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setDescription(`The ticket will be deleted in 4 seconds.`)
    const embed3 = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setDescription(`The ticket will be deleted in 3 seconds.`)

    const embed2 = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setDescription(`The ticket will be deleted in 2 seconds.`)

    const embed1 = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setDescription(`The ticket will be deleted in 1 second.`)

    button.message.edit({ embed: embedd })
      .then((msg) => {

        setTimeout(function () {

          button.message.edit({ embed: embed4 })
          setTimeout(function () {

            button.message.edit({ embed: embed3 })
            setTimeout(function () {

              button.message.edit({ embed: embed2 })
              setTimeout(function () {

                button.message.edit({ embed: embed1 })
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      });

    button.message.channel.messages.fetch().then(async (messages) => {
      const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('pt-br')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

      let response;
      try {
        response = await sourcebin.create([
          {
            name: ' ',
            content: output,
            languageId: 'text',
          },
        ], {
          title: `LOG - ${user.tag}`,
          description: 'Logs',
        });
      }
      catch (e) {
        return
      }

      const logticket = new MessageButton()
        .setLabel('Log')
        .setStyle('url')
        .setEmoji('1006253676236640317')
        .setURL(response.url);

      if (claimer == "0") {
        claimer = null;
      }

      const pv2 = new Discord.MessageEmbed()

        .setDescription(`<@${user.id}> Your **TICKET** has been closed from <@${button.clicker.user.id}>`)
        .setColor("#2f3136")

      user.send(pv2)

      const embedlog = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setTitle("LOG TICKET")
        .addField('Ticket closed from:', `<@${button.clicker.user.id}>`, true)
        .addField('Ticket open from:', `<@${user.id}>`, true)
        .addField('Ticket claimed by:', `<@${claimer}>`, true)
        .addField('Ticket:', `[\`📄 Click here\`](${response.url})`, true)
        .addField('Open:', `${horar}`, true)
        .addField('Close:', `${datetime}`, true)
        .setTimestamp()
        .setFooter('Ticket System | SxD')

      logticket2.send({
        buttons: [logticket],
        embed: embedlog
      })
    })
    await sleep(5000)
    button.message.channel.delete();
  }

  // ============= ADCIONAR MEMBRO =============

  if (button.id == 'addm') {

    await button.reply.defer()

    const perm = new Discord.MessageEmbed()

    .setDescription(` <:error:1006192523842175017> | You are not allowed`)
    .setColor("#990000")

    const user = (await (button.guild?.members.fetch({ user: button.clicker.user }))).hasPermission("MANAGE_MESSAGES")
    if (!user) {
      return button.channel.send(perm).then(message => message.delete({ timeout: 10000 }))
    }

    const mem = new Discord.MessageEmbed()

      .setDescription('Mention a member.')
      .setColor("#2f3136")

    button.channel.send(mem).then(async channel => {
      let canal = button.message.channel.createMessageCollector(c => button.clicker.user.id === button.clicker.user.id, { max: 1 })
      canal.on('collect', c => {
        button.channel.bulkDelete(2)
        let membro = c.mentions.members.first()
        if (!membro) {
          return
        }
        button.message.channel.updateOverwrite(membro.user, {
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true,
          ATTACH_FILES: true,
          READ_MESSAGE_HISTORY: true,
        }).then(() => {
          const rem = new Discord.MessageEmbed()

            .setDescription(`${membro} added.`)
            .setColor('#00FF00')

          button.message.channel.send(rem).then(message => message.delete({ timeout: 5000 }));
        })
      })
    })
  }

  // ============= REMOVER MEMBRO =============

  if (button.id == 'remm') {

    await button.reply.defer()

    const perm = new Discord.MessageEmbed()

    .setDescription(` <:error:1006192523842175017> | You are not allowed`)
    .setColor("#990000")

    const user = (await (button.guild?.members.fetch({ user: button.clicker.user }))).hasPermission("MANAGE_MESSAGES")
    if (!user) {
      return button.channel.send(perm).then(message => message.delete({ timeout: 10000 }))
    }

    const mem = new Discord.MessageEmbed()

    .setDescription('Mention a member.')
      .setColor("#2f3136")

    button.channel.send(mem).then(async channel => {
      let canal = button.message.channel.createMessageCollector(c => button.clicker.user.id === button.clicker.user.id, { max: 1 })
      canal.on('collect', c => {
        button.channel.bulkDelete(2)
        let membro = c.mentions.members.first()
        if (!membro) {
          return
        }
        button.message.channel.updateOverwrite(membro.user, {
          VIEW_CHANNEL: false,
          SEND_MESSAGES: false,
          ATTACH_FILES: false,
          READ_MESSAGE_HISTORY: false,
        }).then(() => {
          const rem = new Discord.MessageEmbed()

            .setDescription(`${membro} removed.`)
            .setColor('#FF0000')

          button.message.channel.send(rem).then(message => message.delete({ timeout: 5000 }));
        })
      })
    })
  }

  // ============= RENOMEAR CANAL =============

  if (button.id == 'renomm') {

    await button.reply.defer()

    const perm = new Discord.MessageEmbed()

    .setDescription(` <:error:1006192523842175017> | You are not allowed`)
    .setColor("#990000")

    const user = (await (button.guild?.members.fetch({ user: button.clicker.user }))).hasPermission("MANAGE_MESSAGES")
    if (!user) {
      return button.channel.send(perm).then(message => message.delete({ timeout: 10000 }))
    }

    const mem = new Discord.MessageEmbed()

    .setDescription('What is the new name?')
      .setColor("#2f3136")

    button.channel.send(mem).then(async channel => {

      let nome2 = button.message.channel.createMessageCollector(c => button.clicker.user.id === button.clicker.user.id, { max: 1 })
      nome2.on('collect', c => {
        button.channel.bulkDelete(2)
        let nome = c.content
        if (!nome) {
          return
        }
        button.message.channel.setName(`👥・${nome}`)

        const rem = new Discord.MessageEmbed()

          .setDescription(`New name: **${nome}**`)
          .setColor('#FFFF00')

        button.message.channel.send(rem).then(message => message.delete({ timeout: 5000 }));
      })
    })
  }

  // ============= FECHAR TICKET DELETAR =============

  if (button.id == 'fecharticket') {

    await button.reply.defer()

    let channel2 = button.message.channel.topic
    channel2 = channel2.split("・")[1]
    const user6 = client.users.cache.get(channel2)

    button.message.channel.overwritePermissions([
      {
        id: user6,
        deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket1),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket2),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket3),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.everyone,
        deny: ['VIEW_CHANNEL'],
      },
    ])

    button.channel.setName(`⛔・closed-ticket`)

    const chiuso = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setDescription(`Ticket closed from <@${button.clicker.user.id}>`)

    const ticketc = new MessageButton()
      .setLabel('Delete Ticket')
      .setStyle('red')
      .setEmoji('1006177492329037895')
      .setID('fcticket');

    const ticketrr = new MessageButton()
      .setLabel('Reopen Ticket')
      .setStyle('grey')
      .setEmoji('1006193631377506396')
      .setID('rrticket');

    button.message.channel.send({
      buttons: [ticketc, ticketrr],
      embed: chiuso
    })
  }

  // riapertura ticket

  if (button.id == 'rrticket') {

    let channel2 = button.message.channel.topic
    channel2 = channel2.split("・")[1]
    const user5 = client.users.cache.get(channel2)

    await button.reply.defer()

    button.channel.bulkDelete(1)

    button.message.channel.overwritePermissions([
      {
        id: user5,
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ATTACH_FILES'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket1),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket2),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.cache.get(config.ticket.idcargoticket3),
        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
      {
        id: button.guild.roles.everyone,
        deny: ['VIEW_CHANNEL'],
      },
    ])

    button.channel.setName(`👥・reopen-ticket-${user5}`)

    const apertura = new Discord.MessageEmbed()
      .setColor("#32CD32")
      .setDescription(`Ticket opened from <@${button.clicker.user.id}>`)

    button.channel.send(apertura).then(message => message.delete({ timeout: 10000 }))
  }
}