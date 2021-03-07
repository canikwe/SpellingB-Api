import { Type } from '@nestjs/common';
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { camelCase } from 'lodash';
import { BaseService } from '../_types/base-service.type';

export function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  @Resolver({ isAbstract: true })
  abstract class CommonResolverHost {
    constructor(protected readonly _service: BaseService) {}

    @Query(() => [classRef], { name: `${camelCase(classRef.name)}s` })
    findAll() {
      return this._service.findAll();
    }

    @Query(() => classRef, { name: `${camelCase(classRef.name)}` })
    findOne(@Args('id', { type: () => Int }) id: number) {
      return this._service.findOne(id);
    }

    // @Mutation(() => classRef, {
    //   name: `createOne${classRef.name.toLowerCase()}`,
    // })
    // createOne<T>(@Args(`create${classRef.name}Input`) createInput: T) {
    // return this._service.create(createSharedInput);
    // }

    // @Mutation(() => Shared)
    // updateShared(
    //   @Args('updateSharedInput') updateSharedInput: UpdateSharedInput,
    // ) {
    //   return this._service.update(updateSharedInput.id, updateSharedInput);
    // }

    // @Mutation(() => Shared)
    // removeShared(@Args('id', { type: () => Int }) id: number) {
    //   return this._service.remove(id);
    // }
  }

  return CommonResolverHost;
}
