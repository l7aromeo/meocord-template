import { ContextMenuCommandBuilder, ApplicationCommandType } from 'discord.js'
import { CommandBuilder } from 'meocord/decorator'
import { CommandType } from 'meocord/enum'

@CommandBuilder(CommandType.CONTEXT_MENU)
export class SampleCommandBuilder {
  build() {
    return new ContextMenuCommandBuilder().setName('sample-context-menu').setType(ApplicationCommandType.User)
  }
}
