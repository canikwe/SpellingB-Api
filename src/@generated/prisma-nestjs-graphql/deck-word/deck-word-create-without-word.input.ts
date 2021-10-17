import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeckCreateNestedOneWithoutDeckWordsInput } from '../deck/deck-create-nested-one-without-deck-words.input';

@InputType()
export class DeckWordCreateWithoutWordInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    starred!: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => DeckCreateNestedOneWithoutDeckWordsInput, {nullable:false})
    deck!: DeckCreateNestedOneWithoutDeckWordsInput;
}
