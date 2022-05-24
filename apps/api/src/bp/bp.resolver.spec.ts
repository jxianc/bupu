import { Test, TestingModule } from '@nestjs/testing'
import { BpResolver } from './bp.resolver'
import { BpService } from './bp.service'

describe('BpResolver', () => {
  let resolver: BpResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BpResolver, BpService],
    }).compile()

    resolver = module.get<BpResolver>(BpResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
