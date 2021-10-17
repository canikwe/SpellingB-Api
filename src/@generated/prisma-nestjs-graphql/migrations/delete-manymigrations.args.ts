import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsWhereInput } from './migrations-where.input';

@ArgsType()
export class DeleteManymigrationsArgs {

    @Field(() => migrationsWhereInput, {nullable:true})
    where?: migrationsWhereInput;
}
