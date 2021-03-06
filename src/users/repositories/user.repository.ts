import { Users, Prisma } from '@prisma/client';
import { PrismaService } from 'src/_prisma/prisma.service';

export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async find(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }

  async findOne(id: number): Promise<Users> {
    return this.prisma.users.findFirst({ where: { id } });
  }
}
