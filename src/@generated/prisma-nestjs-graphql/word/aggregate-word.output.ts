import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WordCountAggregate } from './word-count-aggregate.output';
import { WordAvgAggregate } from './word-avg-aggregate.output';
import { WordSumAggregate } from './word-sum-aggregate.output';
import { WordMinAggregate } from './word-min-aggregate.output';
import { WordMaxAggregate } from './word-max-aggregate.output';

@ObjectType()
export class AggregateWord {

    @Field(() => WordCountAggregate, {nullable:true})
    _count?: WordCountAggregate;

    @Field(() => WordAvgAggregate, {nullable:true})
    _avg?: WordAvgAggregate;

    @Field(() => WordSumAggregate, {nullable:true})
    _sum?: WordSumAggregate;

    @Field(() => WordMinAggregate, {nullable:true})
    _min?: WordMinAggregate;

    @Field(() => WordMaxAggregate, {nullable:true})
    _max?: WordMaxAggregate;
}
