import { MeoCordTestingModule } from 'meocord/testing'
import { SampleContextMenuController } from './sample.context-menu.controller.js'

describe('SampleContextMenuController', () => {
  let controller: SampleContextMenuController

  beforeEach(() => {
    const module = MeoCordTestingModule.create({
      controllers: [SampleContextMenuController],
    }).compile()
    controller = module.get(SampleContextMenuController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
