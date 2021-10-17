import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';
import { DeckWordUpdateWithoutDeckInput } from './deck-word-update-without-deck.input';

@InputType()
export class DeckWordUpdateWithWhereUniqueWithoutDeckInput {

    @Field(() => DeckWordWhereUniqueInput, {nullable:false})
    where!: DeckWordWhereUniqueInput;

    @Field(() => DeckWordUpdateWithoutDeckInput, {nullable:false})
    data!: DeckWordUpdateWithoutDeckInput;
}
