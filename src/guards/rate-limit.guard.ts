import { Guard } from 'meocord/decorator'
import { GuardInterface } from 'meocord/interface'
import { BaseInteraction } from 'discord.js'
import { Logger } from 'meocord/common'

@Guard()
export class RateLimitGuard implements GuardInterface {
  // ==============================
  // NOTE: Consider using Redis or another distributed store for rate limits in production
  // ==============================
  private logger = new Logger(RateLimitGuard.name)
  private readonly limit = 5
  private readonly windowInSeconds = 60
  private rateLimits = new Map<string, number[]>()

  async canActivate(interaction: BaseInteraction): Promise<boolean> {
    const userId = interaction.user.id

    let key: string
    if (interaction.isChatInputCommand()) {
      const commandId = interaction.commandName
      const subCommand = interaction.options.getSubcommand(false) || ''
      key = subCommand ? `${commandId}:${subCommand}:${userId}` : `${commandId}:${userId}`
    } else if (interaction.isMessageComponent()) {
      key = `${interaction.customId}:${userId}`
    } else {
      key = userId
    }

    const currentTime = Math.floor(Date.now() / 1000)
    const timestamps = this.rateLimits.get(key) || []

    const filteredTimestamps = timestamps.filter(time => currentTime - time < this.windowInSeconds)
    filteredTimestamps.push(currentTime)
    this.rateLimits.set(key, filteredTimestamps)

    this.logger.debug(key, filteredTimestamps.length, this.limit, this.windowInSeconds)

    return filteredTimestamps.length <= this.limit
  }
}
