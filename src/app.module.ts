import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { GraphqlOptions } from './graphql.options';
import { PrismaService } from './_base/services/prisma.service';
import { BaseModule } from './_base/base.module';
import { DeckModule } from './decks/deck.module';
import { WordModule } from './words/word.module';
import { DeckWordsModule } from './deck-words/deck-words.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    UserModule,
    WordModule,
    DeckModule,
    DeckWordsModule,
    BaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
