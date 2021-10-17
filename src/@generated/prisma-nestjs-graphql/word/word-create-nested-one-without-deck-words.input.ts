import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WordCreateWithoutDeckWordsInput } from './word-create-without-deck-words.input';
import { WordCreateOrConnectWithoutDeckWordsInput } from './word-create-or-connect-without-deck-words.input';
import { WordWhereUniqueInput } from './word-where-unique.input';

@InputType()
export class WordCreateNestedOneWithoutDeckWordsInput {

    @Field(() => WordCreateWithoutDeckWordsInput, {nullable:true})
    create?: WordCreateWithoutDeckWordsInput;

    @Field(() => WordCreateOrConnectWithoutDeckWordsInput, {nullable:true})
    connectOrCreate?: WordCreateOrConnectWithoutDeckWordsInput;

    @Field(() => WordWhereUniqueInput, {nullable:true})
    connect?: WordWhereUniqueInput;
}
