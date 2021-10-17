import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordUpdateInput } from './word-update.input';
import { WordWhereUniqueInput } from './word-where-unique.input';

@ArgsType()
export class UpdateOneWordArgs {

    @Field(() => WordUpdateInput, {nullable:false})
    data!: WordUpdateInput;

    @Field(() => WordWhereUniqueInput, {nullable:false})
    where!: WordWhereUniqueInput;
}
