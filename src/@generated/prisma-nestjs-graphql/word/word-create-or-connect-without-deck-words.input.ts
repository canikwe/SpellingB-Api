import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WordWhereUniqueInput } from './word-where-unique.input';
import { WordCreateWithoutDeckWordsInput } from './word-create-without-deck-words.input';

@InputType()
export class WordCreateOrConnectWithoutDeckWordsInput {

    @Field(() => WordWhereUniqueInput, {nullable:false})
    where!: WordWhereUniqueInput;

    @Field(() => WordCreateWithoutDeckWordsInput, {nullable:false})
    create!: WordCreateWithoutDeckWordsInput;
}
