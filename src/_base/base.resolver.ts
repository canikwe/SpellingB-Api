import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BaseService } from './base.service';
import { CreateBaseInput } from './dto/create-shared.input';
import { UpdateBaseInput } from './dto/update-shared.input';
import { Base } from './entities/base.entity';

@Resolver(() => Base)
export class BaseResolver {
  constructor(private readonly sharedService: BaseService) {}

  @Mutation(() => Base)
  createShared(@Args('createSharedInput') createSharedInput: CreateBaseInput) {
    return this.sharedService.create(createSharedInput);
  }

  @Query(() => [Base], { name: 'shared' })
  findAll() {
    return this.sharedService.findAll();
  }

  @Query(() => Base, { name: 'shared' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sharedService.findOne(id);
  }

  @Mutation(() => Base)
  updateShared(@Args('updateSharedInput') updateSharedInput: UpdateBaseInput) {
    return this.sharedService.update(updateSharedInput.id, updateSharedInput);
  }

  @Mutation(() => Base)
  removeShared(@Args('id', { type: () => Int }) id: number) {
    return this.sharedService.remove(id);
  }
}
