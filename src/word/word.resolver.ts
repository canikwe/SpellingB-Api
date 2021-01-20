import { Resolver } from '@nestjs/graphql';
import { WordService } from './word.service';
import { Word } from './entities/word.entity';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';

@Resolver(() => Word)
export class WordResolver extends BaseResolver(Word) {
  constructor(private readonly wordService: WordService) {
    super(wordService);
  }
}
