import { MeoCordTestingModule } from 'meocord/testing'
import { SampleReactionController } from './sample.reaction.controller.js'

describe('SampleReactionController', () => {
  let controller: SampleReactionController

  beforeEach(() => {
    const module = MeoCordTestingModule.create({
      controllers: [SampleReactionController],
    }).compile()
    controller = module.get(SampleReactionController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
