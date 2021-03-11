import { PrismaService } from 'src/_base/services/prisma.service';

export class UserRepository {
  constructor(private prisma: PrismaService) {}
}
