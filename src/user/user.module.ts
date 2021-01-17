import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { DeckModule } from '../deck/deck.module';

@Module({
  imports: [forwardRef(() => DeckModule)],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
