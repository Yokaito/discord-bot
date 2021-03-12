import { RunFunction } from '../../interfaces/Events'
import { Command } from '../../interfaces/Commands'
import { Message } from 'discord.js'

export const run: RunFunction = async (client, message: Message) => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.toLocaleLowerCase().startsWith('ts!')
  )
    return

  const args: string[] = message.content.slice('ts!'.length).trim().split(/ +/g)
  const cmd: string = args.shift()!

  const command: Command = client.commands.get(cmd)!
  if (!command) return

  command
    .run(client, message, args)
    .catch((reason: any) =>
      message.channel.send(
        client.embed({ description: `An error came: ${reason}` }, message)
      )
    )
}

export const name: string = 'message'
