import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeckWordUncheckedCreateNestedManyWithoutDeckInput } from '../deck-word/deck-word-unchecked-create-nested-many-without-deck.input';

@InputType()
export class DeckUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;

    @Field(() => DeckWordUncheckedCreateNestedManyWithoutDeckInput, {nullable:true})
    deckWords?: DeckWordUncheckedCreateNestedManyWithoutDeckInput;
}
