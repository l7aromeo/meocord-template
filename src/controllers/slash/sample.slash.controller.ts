import { ChatInputCommandInteraction } from 'discord.js'
import { Controller, Command, UseGuard } from 'meocord/decorator'
import { SampleCommandBuilder } from '@src/controllers/slash/builders/sample.builder'
import { RateLimitGuard } from '@src/guards/rate-limit.guard'

@Controller()
export class SampleSlashController {
  @Command('sample-slash', SampleCommandBuilder)
  @UseGuard(RateLimitGuard)
  async handleSampleSlash(interaction: ChatInputCommandInteraction) {
    await interaction.reply('This is sample reply of slash command.')
  }
}
