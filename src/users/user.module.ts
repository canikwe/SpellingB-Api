import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';
import { UsersRepository } from './repositories/user.repository';
import { PrismaService } from '../_base/services/prisma.service';

@Module({
  imports: [],
  providers: [UserResolver, UserService, UsersRepository, PrismaService],
  exports: [UserService],
})
export class UserModule {}
