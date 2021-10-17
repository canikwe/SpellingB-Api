import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWhereInput } from './deck-where.input';

@InputType()
export class DeckListRelationFilter {

    @Field(() => DeckWhereInput, {nullable:true})
    every?: DeckWhereInput;

    @Field(() => DeckWhereInput, {nullable:true})
    some?: DeckWhereInput;

    @Field(() => DeckWhereInput, {nullable:true})
    none?: DeckWhereInput;
}
