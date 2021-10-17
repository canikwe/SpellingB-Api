import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordWhereUniqueInput } from './word-where-unique.input';

@ArgsType()
export class FindUniqueWordArgs {

    @Field(() => WordWhereUniqueInput, {nullable:false})
    where!: WordWhereUniqueInput;
}
