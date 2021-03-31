import { Injectable } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from 'src/_base/services/base.service';
import { DeckWord } from '../entities/deck-word.entity';

@Injectable()
@Resolver(() => DeckWord)
export class DeckWordsResolver extends BaseResolver(DeckWord) {
  constructor(private readonly baseService: BaseService) {
    super(baseService);
  }
}
