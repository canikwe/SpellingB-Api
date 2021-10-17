import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WordCreateWithoutDeckWordsInput } from './word-create-without-deck-words.input';
import { WordCreateOrConnectWithoutDeckWordsInput } from './word-create-or-connect-without-deck-words.input';
import { WordUpsertWithoutDeckWordsInput } from './word-upsert-without-deck-words.input';
import { WordWhereUniqueInput } from './word-where-unique.input';
import { WordUpdateWithoutDeckWordsInput } from './word-update-without-deck-words.input';

@InputType()
export class WordUpdateOneRequiredWithoutDeckWordsInput {

    @Field(() => WordCreateWithoutDeckWordsInput, {nullable:true})
    create?: WordCreateWithoutDeckWordsInput;

    @Field(() => WordCreateOrConnectWithoutDeckWordsInput, {nullable:true})
    connectOrCreate?: WordCreateOrConnectWithoutDeckWordsInput;

    @Field(() => WordUpsertWithoutDeckWordsInput, {nullable:true})
    upsert?: WordUpsertWithoutDeckWordsInput;

    @Field(() => WordWhereUniqueInput, {nullable:true})
    connect?: WordWhereUniqueInput;

    @Field(() => WordUpdateWithoutDeckWordsInput, {nullable:true})
    update?: WordUpdateWithoutDeckWordsInput;
}
