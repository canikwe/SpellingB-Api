import { Resolver } from '@nestjs/graphql';

import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { Word } from '../entities/word.entity';
import { WordService } from '../services/word.service';

@Resolver(() => Word)
export class WordResolver extends BaseResolver(Word) {
  constructor(private readonly wordService: WordService) {
    super(wordService);
  }
}
