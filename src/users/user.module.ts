import { forwardRef, Module } from '@nestjs/common';
import { DeckModule } from '../decks/deck.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';
import { UsersRepository } from './repositories/user.repository';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  providers: [UserResolver, UserService, UsersRepository, PrismaService],
  exports: [UserService],
})
export class UserModule {}
