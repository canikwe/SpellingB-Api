import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeckCountOrderByAggregateInput } from './deck-count-order-by-aggregate.input';
import { DeckAvgOrderByAggregateInput } from './deck-avg-order-by-aggregate.input';
import { DeckMaxOrderByAggregateInput } from './deck-max-order-by-aggregate.input';
import { DeckMinOrderByAggregateInput } from './deck-min-order-by-aggregate.input';
import { DeckSumOrderByAggregateInput } from './deck-sum-order-by-aggregate.input';

@InputType()
export class DeckOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPublic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => DeckCountOrderByAggregateInput, {nullable:true})
    _count?: DeckCountOrderByAggregateInput;

    @Field(() => DeckAvgOrderByAggregateInput, {nullable:true})
    _avg?: DeckAvgOrderByAggregateInput;

    @Field(() => DeckMaxOrderByAggregateInput, {nullable:true})
    _max?: DeckMaxOrderByAggregateInput;

    @Field(() => DeckMinOrderByAggregateInput, {nullable:true})
    _min?: DeckMinOrderByAggregateInput;

    @Field(() => DeckSumOrderByAggregateInput, {nullable:true})
    _sum?: DeckSumOrderByAggregateInput;
}
