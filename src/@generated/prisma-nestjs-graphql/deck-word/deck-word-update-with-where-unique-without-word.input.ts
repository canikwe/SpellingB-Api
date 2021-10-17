import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';
import { DeckWordUpdateWithoutWordInput } from './deck-word-update-without-word.input';

@InputType()
export class DeckWordUpdateWithWhereUniqueWithoutWordInput {

    @Field(() => DeckWordWhereUniqueInput, {nullable:false})
    where!: DeckWordWhereUniqueInput;

    @Field(() => DeckWordUpdateWithoutWordInput, {nullable:false})
    data!: DeckWordUpdateWithoutWordInput;
}
