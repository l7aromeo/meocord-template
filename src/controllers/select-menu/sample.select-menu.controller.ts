import { StringSelectMenuInteraction } from 'discord.js'
import { Controller, Command } from 'meocord/decorator'
import { CommandType } from 'meocord/enum'

@Controller()
export class SampleSelectMenuController {
  @Command<CommandType.SELECT_MENU>('select-menu', CommandType.SELECT_MENU)
  async handleSelectMenu(interaction: StringSelectMenuInteraction) {
    await interaction.reply('Select menu used!')
  }
}
