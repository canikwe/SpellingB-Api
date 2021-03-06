import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '../entities/user.entity';

export class UsersRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async find(): Promise<User[]> {
    return this.prisma.users.findMany();
  }

  async findOne(id: number): Promise<User> {
    return this.prisma.users.findFirst({ where: { id } });
  }
}
