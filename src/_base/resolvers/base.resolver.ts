import { Type } from '@nestjs/common';
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { camelCase } from 'lodash';
import { BaseService } from '../services/base.service';
import * as pluralize from 'pluralize';

export function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  const modelName = camelCase(classRef.name);

  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    constructor(protected readonly service: BaseService) {}

    @Query(() => [classRef], { name: pluralize(classRef.name) })
    findAll() {
      return this.service.findAll(modelName);
    }

    @Query(() => classRef, { name: classRef.name })
    findOne(@Args('id', { type: () => Int }) id: number) {
      return this.service.findOne(id, modelName);
    }
  }

  return BaseResolverHost;
}
