import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsCreateInput } from './migrations-create.input';

@ArgsType()
export class CreateOnemigrationsArgs {

    @Field(() => migrationsCreateInput, {nullable:false})
    data!: migrationsCreateInput;
}
