import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    const sup = await this.$connect();
    console.log('CONNECT', sup);
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
