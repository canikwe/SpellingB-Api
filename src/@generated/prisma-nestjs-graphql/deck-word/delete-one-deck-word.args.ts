import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';

@ArgsType()
export class DeleteOneDeckWordArgs {

    @Field(() => DeckWordWhereUniqueInput, {nullable:false})
    where!: DeckWordWhereUniqueInput;
}
