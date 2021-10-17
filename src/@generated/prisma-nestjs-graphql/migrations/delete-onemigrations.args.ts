import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsWhereUniqueInput } from './migrations-where-unique.input';

@ArgsType()
export class DeleteOnemigrationsArgs {

    @Field(() => migrationsWhereUniqueInput, {nullable:false})
    where!: migrationsWhereUniqueInput;
}
