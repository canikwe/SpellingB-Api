import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeckWordUncheckedCreateNestedManyWithoutWordInput } from '../deck-word/deck-word-unchecked-create-nested-many-without-word.input';

@InputType()
export class WordUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DeckWordUncheckedCreateNestedManyWithoutWordInput, {nullable:true})
    deckWords?: DeckWordUncheckedCreateNestedManyWithoutWordInput;
}
