import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from '../_base/services/prisma.service';

@Module({
  imports: [],
  providers: [UserResolver, UserService, UserRepository, PrismaService],
  exports: [UserService],
})
export class UserModule {}
