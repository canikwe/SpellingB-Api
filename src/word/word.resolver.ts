import { Resolver, Query } from '@nestjs/graphql';
import { WordService } from './word.service';
import { Word } from './entities/word.entity';

@Resolver(() => Word)
export class WordResolver {
  constructor(private readonly wordService: WordService) {}

  @Query(() => [Word], { name: 'words' })
  findAll() {
    return this.wordService.findAll();
  }
}
