import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordCreateNestedManyWithoutDeckInput } from '../deck-word/deck-word-create-nested-many-without-deck.input';

@InputType()
export class DeckCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;

    @Field(() => DeckWordCreateNestedManyWithoutDeckInput, {nullable:true})
    deckWords?: DeckWordCreateNestedManyWithoutDeckInput;
}
