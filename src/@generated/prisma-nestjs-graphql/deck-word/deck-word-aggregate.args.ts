import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWordWhereInput } from './deck-word-where.input';
import { DeckWordOrderByWithRelationInput } from './deck-word-order-by-with-relation.input';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeckWordCountAggregateInput } from './deck-word-count-aggregate.input';
import { DeckWordAvgAggregateInput } from './deck-word-avg-aggregate.input';
import { DeckWordSumAggregateInput } from './deck-word-sum-aggregate.input';
import { DeckWordMinAggregateInput } from './deck-word-min-aggregate.input';
import { DeckWordMaxAggregateInput } from './deck-word-max-aggregate.input';

@ArgsType()
export class DeckWordAggregateArgs {

    @Field(() => DeckWordWhereInput, {nullable:true})
    where?: DeckWordWhereInput;

    @Field(() => [DeckWordOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeckWordOrderByWithRelationInput>;

    @Field(() => DeckWordWhereUniqueInput, {nullable:true})
    cursor?: DeckWordWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DeckWordCountAggregateInput, {nullable:true})
    _count?: DeckWordCountAggregateInput;

    @Field(() => DeckWordAvgAggregateInput, {nullable:true})
    _avg?: DeckWordAvgAggregateInput;

    @Field(() => DeckWordSumAggregateInput, {nullable:true})
    _sum?: DeckWordSumAggregateInput;

    @Field(() => DeckWordMinAggregateInput, {nullable:true})
    _min?: DeckWordMinAggregateInput;

    @Field(() => DeckWordMaxAggregateInput, {nullable:true})
    _max?: DeckWordMaxAggregateInput;
}
