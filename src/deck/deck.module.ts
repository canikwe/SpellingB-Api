import { forwardRef, Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckResolver } from './deck.resolver';
import { UserModule } from '../user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [DeckResolver, DeckService],
  exports: [DeckService],
})
export class DeckModule {}
