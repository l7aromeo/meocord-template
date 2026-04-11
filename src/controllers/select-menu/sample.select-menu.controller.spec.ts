import { MeoCordTestingModule } from 'meocord/testing'
import { SampleSelectMenuController } from './sample.select-menu.controller.js'

describe('SampleSelectMenuController', () => {
  let controller: SampleSelectMenuController

  beforeEach(() => {
    const module = MeoCordTestingModule.create({
      controllers: [SampleSelectMenuController],
    }).compile()
    controller = module.get(SampleSelectMenuController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
