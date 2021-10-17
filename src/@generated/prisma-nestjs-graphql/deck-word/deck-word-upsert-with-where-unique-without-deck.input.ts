import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';
import { DeckWordUpdateWithoutDeckInput } from './deck-word-update-without-deck.input';
import { DeckWordCreateWithoutDeckInput } from './deck-word-create-without-deck.input';

@InputType()
export class DeckWordUpsertWithWhereUniqueWithoutDeckInput {

    @Field(() => DeckWordWhereUniqueInput, {nullable:false})
    where!: DeckWordWhereUniqueInput;

    @Field(() => DeckWordUpdateWithoutDeckInput, {nullable:false})
    update!: DeckWordUpdateWithoutDeckInput;

    @Field(() => DeckWordCreateWithoutDeckInput, {nullable:false})
    create!: DeckWordCreateWithoutDeckInput;
}
