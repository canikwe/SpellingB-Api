import { forwardRef, Module } from '@nestjs/common';
import { DeckModule } from '../decks/deck.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';
import { UsersRepository } from './repositories/user.repository';
import { PrismaModule } from '../_prisma/prisma.module';

@Module({
  imports: [DeckModule, PrismaModule],
  providers: [UserResolver, UserService, UsersRepository],
  exports: [UserService],
})
export class UserModule {}
