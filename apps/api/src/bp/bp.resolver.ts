import { Mutation, Query, Resolver } from '@nestjs/graphql'
import { BpService } from './bp.service'
import { Bp } from './dto/Bp.entity'

@Resolver()
export class BpResolver {
  constructor(private readonly bpService: BpService) {}

  @Query(() => Bp)
  async getBupu() {
    return await this.bpService.getBupu()
  }

  @Mutation(() => Bp)
  async addBupu() {
    return await this.bpService.addBupu()
  }
}
