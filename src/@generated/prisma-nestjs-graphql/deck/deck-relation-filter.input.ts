import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWhereInput } from './deck-where.input';

@InputType()
export class DeckRelationFilter {

    @Field(() => DeckWhereInput, {nullable:true})
    is?: DeckWhereInput;

    @Field(() => DeckWhereInput, {nullable:true})
    isNot?: DeckWhereInput;
}
