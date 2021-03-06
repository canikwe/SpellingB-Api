import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { WordModule } from './words/word.module';
import { DeckModule } from './decks/deck.module';
import { DeckWordsModule } from './deck-words/deck-words.module';
import { SharedModule } from './_base/base.module';
import { PrismaModule } from './_prisma/prisma.module';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    // GraphQLModule.forRoot({
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    // }),
    // TypeOrmModule.forRoot(),
    PrismaModule,
    UserModule,
    // WordModule,
    DeckModule,
    // DeckWordsModule,
    // SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
