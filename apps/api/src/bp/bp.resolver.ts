import { Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { BpService } from './bp.service'
import { Bp } from './dto/Bp.entity'

const pubSub = new PubSub()

@Resolver()
export class BpResolver {
  constructor(private readonly bpService: BpService) {}

  @Subscription(() => Int)
  booped() {
    return pubSub.asyncIterator('booped')
  }

  @Query(() => Bp)
  async getBupu() {
    return await this.bpService.getBupu()
  }

  @Mutation(() => Bp)
  async addBupu() {
    const newBupu = await this.bpService.addBupu()
    pubSub.publish('booped', { booped: newBupu.bp })
    return newBupu
  }
}
