import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WordUpdateWithoutDeckWordsInput } from './word-update-without-deck-words.input';
import { WordCreateWithoutDeckWordsInput } from './word-create-without-deck-words.input';

@InputType()
export class WordUpsertWithoutDeckWordsInput {

    @Field(() => WordUpdateWithoutDeckWordsInput, {nullable:false})
    update!: WordUpdateWithoutDeckWordsInput;

    @Field(() => WordCreateWithoutDeckWordsInput, {nullable:false})
    create!: WordCreateWithoutDeckWordsInput;
}
