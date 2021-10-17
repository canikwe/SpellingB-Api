import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';
import { DeckWordCreateWithoutDeckInput } from './deck-word-create-without-deck.input';

@InputType()
export class DeckWordCreateOrConnectWithoutDeckInput {

    @Field(() => DeckWordWhereUniqueInput, {nullable:false})
    where!: DeckWordWhereUniqueInput;

    @Field(() => DeckWordCreateWithoutDeckInput, {nullable:false})
    create!: DeckWordCreateWithoutDeckInput;
}
