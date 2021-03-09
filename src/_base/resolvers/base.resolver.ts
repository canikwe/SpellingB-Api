import { Type } from '@nestjs/common';
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { camelCase } from 'lodash';
import { BaseService } from '../services/base.service';
import * as pluralize from 'pluralize';

export function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  const modelName = pluralize(classRef.name.toLowerCase());

  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    constructor(protected readonly _service: BaseService) {}

    @Query(() => [classRef], { name: `${camelCase(classRef.name)}s` })
    findAll() {
      return this._service.findAll(modelName);
    }

    @Query(() => classRef, { name: `${camelCase(classRef.name)}` })
    findOne(@Args('id', { type: () => Int }) id: number) {
      return this._service.findOne(id, modelName);
    }
  }

  return BaseResolverHost;
}
