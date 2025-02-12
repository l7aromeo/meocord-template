import { ButtonInteraction } from 'discord.js'
import { Controller, Command } from 'meocord/decorator'
import { CommandType } from 'meocord/enum'

@Controller()
export class SampleButtonController {
  @Command('button-click', CommandType.BUTTON)
  async handleButton(interaction: ButtonInteraction) {
    await interaction.reply('Button clicked!')
  }

  @Command('button-with-{id}', CommandType.BUTTON)
  async handleButtonWithId(interaction: ButtonInteraction, { id }) {
    await interaction.reply(`Button with id: ${id} clicked!`)
  }
}
