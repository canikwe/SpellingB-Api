import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from '../users/user.module';
import { DeckResolver } from './resolvers/deck.resolver';
import { DeckService } from './services/deck.service';
import { DeckRepository } from './repositories/deck.repository';
import { PrismaService } from '../_base/services/prisma.service';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [DeckResolver, DeckService, DeckRepository, PrismaService],
  exports: [DeckService],
})
export class DeckModule {}
