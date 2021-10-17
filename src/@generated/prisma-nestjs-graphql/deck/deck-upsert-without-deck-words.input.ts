import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckUpdateWithoutDeckWordsInput } from './deck-update-without-deck-words.input';
import { DeckCreateWithoutDeckWordsInput } from './deck-create-without-deck-words.input';

@InputType()
export class DeckUpsertWithoutDeckWordsInput {

    @Field(() => DeckUpdateWithoutDeckWordsInput, {nullable:false})
    update!: DeckUpdateWithoutDeckWordsInput;

    @Field(() => DeckCreateWithoutDeckWordsInput, {nullable:false})
    create!: DeckCreateWithoutDeckWordsInput;
}
