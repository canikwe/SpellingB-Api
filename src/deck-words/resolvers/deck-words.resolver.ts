import { Injectable } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { DeckWord } from 'src/@generated/prisma-nestjs-graphql/_models/deck-word.model';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from 'src/_base/services/base.service';

@Injectable()
@Resolver(() => DeckWord)
export class DeckWordsResolver extends BaseResolver({ entityRef: DeckWord }) {
  constructor(private readonly baseService: BaseService) {
    super(baseService);
  }
}
