import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordCreateNestedManyWithoutWordInput } from '../deck-word/deck-word-create-nested-many-without-word.input';

@InputType()
export class WordCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DeckWordCreateNestedManyWithoutWordInput, {nullable:true})
    deckWords?: DeckWordCreateNestedManyWithoutWordInput;
}
