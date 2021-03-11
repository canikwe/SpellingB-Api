import { Resolver } from '@nestjs/graphql';

import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { Word } from '../entities/word.entity';
import { BaseService } from '../../_base/services/base.service';

@Resolver(() => Word)
export class WordResolver extends BaseResolver(Word) {
  constructor(private readonly baseService: BaseService) {
    super(baseService);
  }
}
