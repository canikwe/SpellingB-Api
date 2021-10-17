import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordWhereUniqueInput } from './word-where-unique.input';
import { WordCreateInput } from './word-create.input';
import { WordUpdateInput } from './word-update.input';

@ArgsType()
export class UpsertOneWordArgs {

    @Field(() => WordWhereUniqueInput, {nullable:false})
    where!: WordWhereUniqueInput;

    @Field(() => WordCreateInput, {nullable:false})
    create!: WordCreateInput;

    @Field(() => WordUpdateInput, {nullable:false})
    update!: WordUpdateInput;
}
