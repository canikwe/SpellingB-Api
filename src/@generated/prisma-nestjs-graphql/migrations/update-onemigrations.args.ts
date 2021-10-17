import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsUpdateInput } from './migrations-update.input';
import { migrationsWhereUniqueInput } from './migrations-where-unique.input';

@ArgsType()
export class UpdateOnemigrationsArgs {

    @Field(() => migrationsUpdateInput, {nullable:false})
    data!: migrationsUpdateInput;

    @Field(() => migrationsWhereUniqueInput, {nullable:false})
    where!: migrationsWhereUniqueInput;
}
