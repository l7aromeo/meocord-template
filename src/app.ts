import { GatewayIntentBits, Partials, ActivityType } from 'discord.js'
import { MeoCord } from 'meocord/decorator'
import { SampleSlashController } from '@src/controllers/slash/sample.slash.controller'
import { SampleSelectMenuController } from '@src/controllers/select-menu/sample.select-menu.controller'
import { SampleButtonController } from '@src/controllers/button/sample.button.controller'
import { SampleMessageController } from '@src/controllers/message/sample.message.controller'
import { SampleReactionController } from '@src/controllers/reaction/sample.reaction.controller'

@MeoCord({
  controllers: [
    // Slash Commands
    SampleSlashController,
    // Select Menu
    SampleSelectMenuController,
    // Buttons
    SampleButtonController,
    // Message
    SampleMessageController,
    // Reactions
    SampleReactionController,
  ],
  clientOptions: {
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Reaction],
  },
  activities: [
    {
      name: ``,
      type: ActivityType.Custom,
    },
  ],
})
export default class App {}
