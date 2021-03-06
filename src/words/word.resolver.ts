import { Resolver } from '@nestjs/graphql';
import { WordService } from './word.service';
import { Word } from './entities/word.entity';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { CreateWordInput } from './dto/create-word.input';

@Resolver(() => Word)
export class WordResolver extends BaseResolver(Word) {
  constructor(private readonly wordService: WordService) {
    super(wordService);
  }
}
