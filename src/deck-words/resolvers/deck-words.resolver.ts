import { Injectable } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { FindManyDeckWordArgs } from 'src/@generated/prisma-nestjs-graphql/deck-word/find-many-deck-word.args';
import { DeckWord } from 'src/@generated/prisma-nestjs-graphql/_models/deck-word.model';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from 'src/_base/services/base.service';

@Injectable()
@Resolver(() => DeckWord)
export class DeckWordsResolver extends BaseResolver({
  entityRef: DeckWord,
  findManyInputRef: FindManyDeckWordArgs,
}) {
  constructor(private readonly baseService: BaseService) {
    super(baseService);
  }
}
