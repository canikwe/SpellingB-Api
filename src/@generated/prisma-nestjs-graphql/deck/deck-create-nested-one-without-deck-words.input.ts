import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckCreateWithoutDeckWordsInput } from './deck-create-without-deck-words.input';
import { DeckCreateOrConnectWithoutDeckWordsInput } from './deck-create-or-connect-without-deck-words.input';
import { DeckWhereUniqueInput } from './deck-where-unique.input';

@InputType()
export class DeckCreateNestedOneWithoutDeckWordsInput {

    @Field(() => DeckCreateWithoutDeckWordsInput, {nullable:true})
    create?: DeckCreateWithoutDeckWordsInput;

    @Field(() => DeckCreateOrConnectWithoutDeckWordsInput, {nullable:true})
    connectOrCreate?: DeckCreateOrConnectWithoutDeckWordsInput;

    @Field(() => DeckWhereUniqueInput, {nullable:true})
    connect?: DeckWhereUniqueInput;
}
