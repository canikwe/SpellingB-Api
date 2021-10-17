import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutDecksInput } from '../user/user-create-nested-one-without-decks.input';
import { DeckWordCreateNestedManyWithoutDeckInput } from '../deck-word/deck-word-create-nested-many-without-deck.input';

@InputType()
export class DeckCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;

    @Field(() => UserCreateNestedOneWithoutDecksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutDecksInput;

    @Field(() => DeckWordCreateNestedManyWithoutDeckInput, {nullable:true})
    deckWords?: DeckWordCreateNestedManyWithoutDeckInput;
}
