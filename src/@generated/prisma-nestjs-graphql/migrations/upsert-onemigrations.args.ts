import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsWhereUniqueInput } from './migrations-where-unique.input';
import { migrationsCreateInput } from './migrations-create.input';
import { migrationsUpdateInput } from './migrations-update.input';

@ArgsType()
export class UpsertOnemigrationsArgs {

    @Field(() => migrationsWhereUniqueInput, {nullable:false})
    where!: migrationsWhereUniqueInput;

    @Field(() => migrationsCreateInput, {nullable:false})
    create!: migrationsCreateInput;

    @Field(() => migrationsUpdateInput, {nullable:false})
    update!: migrationsUpdateInput;
}
