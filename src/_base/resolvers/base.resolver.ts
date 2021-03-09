import { Type } from '@nestjs/common';
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { camelCase } from 'lodash';
import { BaseService } from '../services/base.service';

export function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    constructor(
      protected readonly _service: BaseService,
      private modelName?: string,
    ) {}

    @Query(() => [classRef], { name: `${camelCase(classRef.name)}s` })
    findAll() {
      return this._service.findAll(this.modelName);
    }

    @Query(() => classRef, { name: `${camelCase(classRef.name)}` })
    findOne(@Args('id', { type: () => Int }) id: number) {
      return this._service.findOne(id, this.modelName);
    }
  }

  return BaseResolverHost;
}
