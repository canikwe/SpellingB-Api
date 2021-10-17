import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWhereInput } from './deck-where.input';
import { DeckOrderByWithAggregationInput } from './deck-order-by-with-aggregation.input';
import { DeckScalarFieldEnum } from './deck-scalar-field.enum';
import { DeckScalarWhereWithAggregatesInput } from './deck-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DeckCountAggregateInput } from './deck-count-aggregate.input';
import { DeckAvgAggregateInput } from './deck-avg-aggregate.input';
import { DeckSumAggregateInput } from './deck-sum-aggregate.input';
import { DeckMinAggregateInput } from './deck-min-aggregate.input';
import { DeckMaxAggregateInput } from './deck-max-aggregate.input';

@ArgsType()
export class DeckGroupByArgs {

    @Field(() => DeckWhereInput, {nullable:true})
    where?: DeckWhereInput;

    @Field(() => [DeckOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DeckOrderByWithAggregationInput>;

    @Field(() => [DeckScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DeckScalarFieldEnum>;

    @Field(() => DeckScalarWhereWithAggregatesInput, {nullable:true})
    having?: DeckScalarWhereWithAggregatesInput;

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
