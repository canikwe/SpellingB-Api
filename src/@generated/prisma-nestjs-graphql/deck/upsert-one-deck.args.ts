import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWhereUniqueInput } from './deck-where-unique.input';
import { DeckCreateInput } from './deck-create.input';
import { DeckUpdateInput } from './deck-update.input';

@ArgsType()
export class UpsertOneDeckArgs {

    @Field(() => DeckWhereUniqueInput, {nullable:false})
    where!: DeckWhereUniqueInput;

    @Field(() => DeckCreateInput, {nullable:false})
    create!: DeckCreateInput;

    @Field(() => DeckUpdateInput, {nullable:false})
    update!: DeckUpdateInput;
}
