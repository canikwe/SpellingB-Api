import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';
import { DeckWordUpdateWithoutWordInput } from './deck-word-update-without-word.input';
import { DeckWordCreateWithoutWordInput } from './deck-word-create-without-word.input';

@InputType()
export class DeckWordUpsertWithWhereUniqueWithoutWordInput {

    @Field(() => DeckWordWhereUniqueInput, {nullable:false})
    where!: DeckWordWhereUniqueInput;

    @Field(() => DeckWordUpdateWithoutWordInput, {nullable:false})
    update!: DeckWordUpdateWithoutWordInput;

    @Field(() => DeckWordCreateWithoutWordInput, {nullable:false})
    create!: DeckWordCreateWithoutWordInput;
}
