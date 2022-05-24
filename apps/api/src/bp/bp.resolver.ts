import { Query, Resolver } from '@nestjs/graphql'
import { BpService } from './bp.service'

@Resolver()
export class BpResolver {
  constructor(private readonly bpService: BpService) {}

  @Query(() => String)
  hello() {
    return 'world'
  }
}
