import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckUpdateInput } from './deck-update.input';
import { DeckWhereUniqueInput } from './deck-where-unique.input';

@ArgsType()
export class UpdateOneDeckArgs {

    @Field(() => DeckUpdateInput, {nullable:false})
    data!: DeckUpdateInput;

    @Field(() => DeckWhereUniqueInput, {nullable:false})
    where!: DeckWhereUniqueInput;
}
