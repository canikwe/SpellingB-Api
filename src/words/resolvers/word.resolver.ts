import { Resolver } from '@nestjs/graphql';
import { FindManyWordArgs } from 'src/@generated/prisma-nestjs-graphql/word/find-many-word.args';
import { Word } from 'src/@generated/prisma-nestjs-graphql/_models/word.model';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from '../../_base/services/base.service';

@Resolver(() => Word)
export class WordResolver extends BaseResolver({
  entityRef: Word,
  whereArgs: FindManyWordArgs,
}) {
  constructor(private readonly baseService: BaseService) {
    super(baseService);
  }
}
