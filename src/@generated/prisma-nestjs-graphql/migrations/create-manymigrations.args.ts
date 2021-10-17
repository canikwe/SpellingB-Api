import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsCreateManyInput } from './migrations-create-many.input';

@ArgsType()
export class CreateManymigrationsArgs {

    @Field(() => [migrationsCreateManyInput], {nullable:false})
    data!: Array<migrationsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
