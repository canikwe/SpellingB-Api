import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWhereInput } from './deck-where.input';
import { DeckOrderByWithRelationInput } from './deck-order-by-with-relation.input';
import { DeckWhereUniqueInput } from './deck-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeckCountAggregateInput } from './deck-count-aggregate.input';
import { DeckAvgAggregateInput } from './deck-avg-aggregate.input';
import { DeckSumAggregateInput } from './deck-sum-aggregate.input';
import { DeckMinAggregateInput } from './deck-min-aggregate.input';
import { DeckMaxAggregateInput } from './deck-max-aggregate.input';

@ArgsType()
export class DeckAggregateArgs {

    @Field(() => DeckWhereInput, {nullable:true})
    where?: DeckWhereInput;

    @Field(() => [DeckOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeckOrderByWithRelationInput>;

    @Field(() => DeckWhereUniqueInput, {nullable:true})
    cursor?: DeckWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DeckCountAggregateInput, {nullable:true})
    _count?: DeckCountAggregateInput;

    @Field(() => DeckAvgAggregateInput, {nullable:true})
    _avg?: DeckAvgAggregateInput;

    @Field(() => DeckSumAggregateInput, {nullable:true})
    _sum?: DeckSumAggregateInput;

    @Field(() => DeckMinAggregateInput, {nullable:true})
    _min?: DeckMinAggregateInput;

    @Field(() => DeckMaxAggregateInput, {nullable:true})
    _max?: DeckMaxAggregateInput;
}
