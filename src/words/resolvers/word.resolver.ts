import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindManyWordArgs } from 'src/@generated/prisma-nestjs-graphql/word/find-many-word.args';
import { Word } from 'src/@generated/prisma-nestjs-graphql/_models/word.model';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from '../../_base/services/base.service';
import { DictionaryWordRes } from '../entities/dictionary-word-response.entity';
import { WordService } from '../services/word.service';

@Resolver(() => Word)
export class WordResolver extends BaseResolver({
  entityRef: Word,
  findManyInputRef: FindManyWordArgs,
}) {
  constructor(
    private readonly baseService: BaseService,
    private readonly wordService: WordService,
  ) {
    super(baseService);
  }

  @Query(() => [DictionaryWordRes], {
    nullable: true,
    name: 'WordsAndDefinitions',
  })
  findWordsAndDefinitions(@Args('word', { type: () => String }) word: string) {
    return this.wordService.fetchWord(word);
  }

  @Query(() => DictionaryWordRes, {
    nullable: true,
    name: 'RandomWordAndDefinition',
  })
  getRandomWordAndDefinition() {
    return this.wordService.getRandomWord();
  }
}
