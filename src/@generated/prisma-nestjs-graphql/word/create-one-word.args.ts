import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordCreateInput } from './word-create.input';

@ArgsType()
export class CreateOneWordArgs {

    @Field(() => WordCreateInput, {nullable:false})
    data!: WordCreateInput;
}
