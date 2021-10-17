import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckCreateWithoutDeckWordsInput } from './deck-create-without-deck-words.input';
import { DeckCreateOrConnectWithoutDeckWordsInput } from './deck-create-or-connect-without-deck-words.input';
import { DeckUpsertWithoutDeckWordsInput } from './deck-upsert-without-deck-words.input';
import { DeckWhereUniqueInput } from './deck-where-unique.input';
import { DeckUpdateWithoutDeckWordsInput } from './deck-update-without-deck-words.input';

@InputType()
export class DeckUpdateOneRequiredWithoutDeckWordsInput {

    @Field(() => DeckCreateWithoutDeckWordsInput, {nullable:true})
    create?: DeckCreateWithoutDeckWordsInput;

    @Field(() => DeckCreateOrConnectWithoutDeckWordsInput, {nullable:true})
    connectOrCreate?: DeckCreateOrConnectWithoutDeckWordsInput;

    @Field(() => DeckUpsertWithoutDeckWordsInput, {nullable:true})
    upsert?: DeckUpsertWithoutDeckWordsInput;

    @Field(() => DeckWhereUniqueInput, {nullable:true})
    connect?: DeckWhereUniqueInput;

    @Field(() => DeckUpdateWithoutDeckWordsInput, {nullable:true})
    update?: DeckUpdateWithoutDeckWordsInput;
}
