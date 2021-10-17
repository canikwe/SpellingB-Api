import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWhereUniqueInput } from './deck-where-unique.input';
import { DeckUpdateWithoutUserInput } from './deck-update-without-user.input';

@InputType()
export class DeckUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => DeckWhereUniqueInput, {nullable:false})
    where!: DeckWhereUniqueInput;

    @Field(() => DeckUpdateWithoutUserInput, {nullable:false})
    data!: DeckUpdateWithoutUserInput;
}
