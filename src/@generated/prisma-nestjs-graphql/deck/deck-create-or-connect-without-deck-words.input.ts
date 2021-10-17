import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWhereUniqueInput } from './deck-where-unique.input';
import { DeckCreateWithoutDeckWordsInput } from './deck-create-without-deck-words.input';

@InputType()
export class DeckCreateOrConnectWithoutDeckWordsInput {

    @Field(() => DeckWhereUniqueInput, {nullable:false})
    where!: DeckWhereUniqueInput;

    @Field(() => DeckCreateWithoutDeckWordsInput, {nullable:false})
    create!: DeckCreateWithoutDeckWordsInput;
}
