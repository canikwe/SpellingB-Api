import { Type } from '@nestjs/common';
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { camelCase } from 'lodash';
import { BaseService } from '../services/base.service';
import * as pluralize from 'pluralize';

export function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  const name = pluralize(camelCase(classRef.name));

  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    constructor(protected readonly _service: BaseService) {}

    @Query(() => [classRef], { name })
    findAll() {
      return this._service.findAll(name);
    }

    @Query(() => classRef, { name: `${camelCase(classRef.name)}` })
    findOne(@Args('id', { type: () => Int }) id: number) {
      return this._service.findOne(id, name);
    }
  }

  return BaseResolverHost;
}
