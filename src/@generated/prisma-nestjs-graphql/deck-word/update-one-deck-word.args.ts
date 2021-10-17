import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWordUpdateInput } from './deck-word-update.input';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';

@ArgsType()
export class UpdateOneDeckWordArgs {

    @Field(() => DeckWordUpdateInput, {nullable:false})
    data!: DeckWordUpdateInput;

    @Field(() => DeckWordWhereUniqueInput, {nullable:false})
    where!: DeckWordWhereUniqueInput;
}
