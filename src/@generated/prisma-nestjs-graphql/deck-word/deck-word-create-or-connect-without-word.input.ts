import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';
import { DeckWordCreateWithoutWordInput } from './deck-word-create-without-word.input';

@InputType()
export class DeckWordCreateOrConnectWithoutWordInput {

    @Field(() => DeckWordWhereUniqueInput, {nullable:false})
    where!: DeckWordWhereUniqueInput;

    @Field(() => DeckWordCreateWithoutWordInput, {nullable:false})
    create!: DeckWordCreateWithoutWordInput;
}
