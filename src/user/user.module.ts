import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { DeckModule } from '../deck/deck.module';

@Module({
  imports: [DeckModule],
  providers: [UserResolver, UserService],
})
export class UserModule {}
