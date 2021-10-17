import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsUpdateManyMutationInput } from './migrations-update-many-mutation.input';
import { migrationsWhereInput } from './migrations-where.input';

@ArgsType()
export class UpdateManymigrationsArgs {

    @Field(() => migrationsUpdateManyMutationInput, {nullable:false})
    data!: migrationsUpdateManyMutationInput;

    @Field(() => migrationsWhereInput, {nullable:true})
    where?: migrationsWhereInput;
}
