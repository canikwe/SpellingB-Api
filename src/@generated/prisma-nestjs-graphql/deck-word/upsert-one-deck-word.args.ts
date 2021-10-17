import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';
import { DeckWordCreateInput } from './deck-word-create.input';
import { DeckWordUpdateInput } from './deck-word-update.input';

@ArgsType()
export class UpsertOneDeckWordArgs {

    @Field(() => DeckWordWhereUniqueInput, {nullable:false})
    where!: DeckWordWhereUniqueInput;

    @Field(() => DeckWordCreateInput, {nullable:false})
    create!: DeckWordCreateInput;

    @Field(() => DeckWordUpdateInput, {nullable:false})
    update!: DeckWordUpdateInput;
}
