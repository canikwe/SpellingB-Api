import { Resolver } from '@nestjs/graphql';
import { Word } from 'src/@generated/prisma-nestjs-graphql/_models/word.model';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from '../../_base/services/base.service';

@Resolver(() => Word)
export class WordResolver extends BaseResolver(Word) {
  constructor(private readonly baseService: BaseService) {
    super(baseService);
  }
}
