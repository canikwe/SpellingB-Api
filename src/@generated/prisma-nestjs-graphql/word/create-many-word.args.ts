import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordCreateManyInput } from './word-create-many.input';

@ArgsType()
export class CreateManyWordArgs {

    @Field(() => [WordCreateManyInput], {nullable:false})
    data!: Array<WordCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
