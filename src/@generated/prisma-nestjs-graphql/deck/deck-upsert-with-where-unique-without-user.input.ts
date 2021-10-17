import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWhereUniqueInput } from './deck-where-unique.input';
import { DeckUpdateWithoutUserInput } from './deck-update-without-user.input';
import { DeckCreateWithoutUserInput } from './deck-create-without-user.input';

@InputType()
export class DeckUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => DeckWhereUniqueInput, {nullable:false})
    where!: DeckWhereUniqueInput;

    @Field(() => DeckUpdateWithoutUserInput, {nullable:false})
    update!: DeckUpdateWithoutUserInput;

    @Field(() => DeckCreateWithoutUserInput, {nullable:false})
    create!: DeckCreateWithoutUserInput;
}
