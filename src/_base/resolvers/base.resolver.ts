import { Type } from '@nestjs/common';
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { camelCase } from 'lodash';
import { BaseService } from '../services/base.service';
import * as pluralize from 'pluralize';
import { BaseResolverConfig } from '../types/base-resolver-config.type';

export function BaseResolver<E extends Type<unknown>>({
  entityRef,
}: BaseResolverConfig<E>): any {
  const modelName = camelCase(entityRef.name);

  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    constructor(protected readonly service: BaseService) {}

    @Query(() => [entityRef], { name: pluralize(entityRef.name) })
    findAll() {
      return this.service.findAll(modelName);
    }

    @Query(() => entityRef, { name: entityRef.name })
    findOne(@Args('id', { type: () => Int }) id: number) {
      return this.service.findOne(id, modelName);
    }
  }

  return BaseResolverHost;
}
