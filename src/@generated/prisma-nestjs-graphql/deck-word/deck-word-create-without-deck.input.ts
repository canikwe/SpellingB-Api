import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WordCreateNestedOneWithoutDeckWordsInput } from '../word/word-create-nested-one-without-deck-words.input';

@InputType()
export class DeckWordCreateWithoutDeckInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    starred!: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => WordCreateNestedOneWithoutDeckWordsInput, {nullable:false})
    word!: WordCreateNestedOneWithoutDeckWordsInput;
}
