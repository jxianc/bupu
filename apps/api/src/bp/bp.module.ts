import { Module } from '@nestjs/common'
import { BpService } from './bp.service'
import { BpResolver } from './bp.resolver'
import { PrismaService } from 'src/prisma.service'

@Module({
  providers: [BpResolver, BpService, PrismaService],
})
export class BpModule {}
