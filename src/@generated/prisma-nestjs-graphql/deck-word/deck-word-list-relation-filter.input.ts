import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordWhereInput } from './deck-word-where.input';

@InputType()
export class DeckWordListRelationFilter {

    @Field(() => DeckWordWhereInput, {nullable:true})
    every?: DeckWordWhereInput;

    @Field(() => DeckWordWhereInput, {nullable:true})
    some?: DeckWordWhereInput;

    @Field(() => DeckWordWhereInput, {nullable:true})
    none?: DeckWordWhereInput;
}
