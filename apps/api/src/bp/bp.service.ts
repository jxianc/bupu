import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

@Injectable()
export class BpService {
  constructor(private readonly prisma: PrismaService) {}

  async getBupu() {
    const bp = await this.prisma.bp.findUnique({
      where: {
        id: 1,
      },
    })
    return bp
  }

  async addBupu() {
    const bupu = await this.getBupu()
    const newBp = await this.prisma.bp.update({
      where: {
        id: bupu.id,
      },
      data: {
        bp: bupu.bp + 1,
      },
    })
    return newBp
  }
}
