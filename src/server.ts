import { Bot } from './client'
import env from './environment'

new Bot().start({ token: env.TOKEN })
