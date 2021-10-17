import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeckWordCountAggregate } from './deck-word-count-aggregate.output';
import { DeckWordAvgAggregate } from './deck-word-avg-aggregate.output';
import { DeckWordSumAggregate } from './deck-word-sum-aggregate.output';
import { DeckWordMinAggregate } from './deck-word-min-aggregate.output';
import { DeckWordMaxAggregate } from './deck-word-max-aggregate.output';

@ObjectType()
export class DeckWordGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    starred!: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Int, {nullable:false})
    wordId!: number;

    @Field(() => Int, {nullable:false})
    deckId!: number;

    @Field(() => DeckWordCountAggregate, {nullable:true})
    _count?: DeckWordCountAggregate;

    @Field(() => DeckWordAvgAggregate, {nullable:true})
    _avg?: DeckWordAvgAggregate;

    @Field(() => DeckWordSumAggregate, {nullable:true})
    _sum?: DeckWordSumAggregate;

    @Field(() => DeckWordMinAggregate, {nullable:true})
    _min?: DeckWordMinAggregate;

    @Field(() => DeckWordMaxAggregate, {nullable:true})
    _max?: DeckWordMaxAggregate;
}
