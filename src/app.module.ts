import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { GraphqlOptions } from './graphql.options';
import { PrismaService } from './_base/services/prisma.service';
import { SharedModule } from './_base/base.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    UserModule,
    // WordModule,
    // DeckModule,
    // DeckWordsModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
