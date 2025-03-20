import { ButtonInteraction } from 'discord.js'
import { Controller, Command, UseGuard } from 'meocord/decorator'
import { CommandType } from 'meocord/enum'
import { RateLimitGuard } from '@src/guards/rate-limit.guard'

@Controller()
export class SampleButtonController {
  @Command('button-click', CommandType.BUTTON)
  @UseGuard(RateLimitGuard)
  async handleButton(interaction: ButtonInteraction) {
    await interaction.reply('Button clicked!')
  }

  @Command('button-with-{id}', CommandType.BUTTON)
  @UseGuard({ provide: RateLimitGuard, params: { limit: 2, windowInSeconds: 60 } })
  async handleButtonWithId(interaction: ButtonInteraction, { id }) {
    await interaction.reply(`Button with id: ${id} clicked!`)
  }
}
