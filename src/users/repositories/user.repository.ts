import { Inject } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { Users } from '../entities/user.entity';

export class UsersRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async find(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }

  async findOne(id: number): Promise<Users> {
    return this.prisma.users.findFirst({ where: { id } });
  }
}
