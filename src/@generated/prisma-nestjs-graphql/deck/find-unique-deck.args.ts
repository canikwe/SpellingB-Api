import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWhereUniqueInput } from './deck-where-unique.input';

@ArgsType()
export class FindUniqueDeckArgs {

    @Field(() => DeckWhereUniqueInput, {nullable:false})
    where!: DeckWhereUniqueInput;
}
