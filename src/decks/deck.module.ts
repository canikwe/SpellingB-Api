import { forwardRef, Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckResolver } from './deck.resolver';
import { UserModule } from '../users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deck } from './entities/deck.entity';

@Module({
  imports: [forwardRef(() => UserModule), TypeOrmModule.forFeature([Deck])],
  providers: [DeckResolver, DeckService],
  exports: [DeckService],
})
export class DeckModule {}
