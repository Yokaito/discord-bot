import { RunFunction } from '../../interfaces/Commands'
import { Message } from 'discord.js'

export const run: RunFunction = async (client, message) => {
  const msg: Message = await message.channel.send(
    client.embed({ description: 'Ponging!' }, message)
  )
  await msg.edit(
    client.embed(
      {
        description: `WebSocket ${client.ws.ping}MS\nMessage edit: ${
          msg.createdTimestamp - message.createdTimestamp
        }`
      },
      message
    )
  )
}

export const name: string = 'ping'
