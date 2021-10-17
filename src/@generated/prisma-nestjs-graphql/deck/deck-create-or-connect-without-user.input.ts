import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWhereUniqueInput } from './deck-where-unique.input';
import { DeckCreateWithoutUserInput } from './deck-create-without-user.input';

@InputType()
export class DeckCreateOrConnectWithoutUserInput {

    @Field(() => DeckWhereUniqueInput, {nullable:false})
    where!: DeckWhereUniqueInput;

    @Field(() => DeckCreateWithoutUserInput, {nullable:false})
    create!: DeckCreateWithoutUserInput;
}
