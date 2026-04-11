import { MeoCordTestingModule } from 'meocord/testing'
import { SampleModalController } from './sample.modal-submit.controller.js'

describe('SampleModalController', () => {
  let controller: SampleModalController

  beforeEach(() => {
    const module = MeoCordTestingModule.create({
      controllers: [SampleModalController],
    }).compile()
    controller = module.get(SampleModalController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
