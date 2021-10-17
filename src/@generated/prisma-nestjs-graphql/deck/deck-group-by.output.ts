import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeckCountAggregate } from './deck-count-aggregate.output';
import { DeckAvgAggregate } from './deck-avg-aggregate.output';
import { DeckSumAggregate } from './deck-sum-aggregate.output';
import { DeckMinAggregate } from './deck-min-aggregate.output';
import { DeckMaxAggregate } from './deck-max-aggregate.output';

@ObjectType()
export class DeckGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => DeckCountAggregate, {nullable:true})
    _count?: DeckCountAggregate;

    @Field(() => DeckAvgAggregate, {nullable:true})
    _avg?: DeckAvgAggregate;

    @Field(() => DeckSumAggregate, {nullable:true})
    _sum?: DeckSumAggregate;

    @Field(() => DeckMinAggregate, {nullable:true})
    _min?: DeckMinAggregate;

    @Field(() => DeckMaxAggregate, {nullable:true})
    _max?: DeckMaxAggregate;
}
