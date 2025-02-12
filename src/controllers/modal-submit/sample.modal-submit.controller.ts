import { ModalSubmitInteraction } from 'discord.js'
import { Controller, Command, UseGuard } from 'meocord/decorator'
import { CommandType } from 'meocord/enum'
import { RateLimitGuard } from '@src/guards/rate-limit.guard'

@Controller()
export class SampleModalController {
  @Command('submit-modal', CommandType.MODAL_SUBMIT)
  @UseGuard(RateLimitGuard)
  async handleModal(interaction: ModalSubmitInteraction) {
    await interaction.reply('Modal submitted!')
  }
}
