import { Type } from '@nestjs/common';
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { BaseService } from '../base.service';

export function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  @Resolver({ isAbstract: true })
  abstract class CommonResolverHost {
    constructor(protected readonly _service: BaseService) {}

    @Query(() => [classRef], { name: `${classRef.name.toLowerCase()}s` })
    findAll() {
      return this._service.findAll();
    }

    @Query(() => classRef, { name: `${classRef.name.toLowerCase()}` })
    findOne(@Args('id', { type: () => Int }) id: number) {
      return this._service.findOne(id);
    }

    // @Mutation(() => Shared)
    // createShared(
    //   @Args('createSharedInput') createSharedInput: CreateSharedInput,
    // ) {
    //   return this._service.create(createSharedInput);
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
