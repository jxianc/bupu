import { Module } from '@nestjs/common'
import { BpService } from './bp.service'
import { BpResolver } from './bp.resolver'

@Module({
  providers: [BpResolver, BpService],
})
export class BpModule {}
