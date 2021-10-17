import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DeckWordSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    wordId?: number;

    @Field(() => Int, {nullable:true})
    deckId?: number;
}
