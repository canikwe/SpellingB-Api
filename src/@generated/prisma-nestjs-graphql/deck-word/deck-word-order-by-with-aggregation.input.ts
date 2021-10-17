import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeckWordCountOrderByAggregateInput } from './deck-word-count-order-by-aggregate.input';
import { DeckWordAvgOrderByAggregateInput } from './deck-word-avg-order-by-aggregate.input';
import { DeckWordMaxOrderByAggregateInput } from './deck-word-max-order-by-aggregate.input';
import { DeckWordMinOrderByAggregateInput } from './deck-word-min-order-by-aggregate.input';
import { DeckWordSumOrderByAggregateInput } from './deck-word-sum-order-by-aggregate.input';

@InputType()
export class DeckWordOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    starred?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wordId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deckId?: keyof typeof SortOrder;

    @Field(() => DeckWordCountOrderByAggregateInput, {nullable:true})
    _count?: DeckWordCountOrderByAggregateInput;

    @Field(() => DeckWordAvgOrderByAggregateInput, {nullable:true})
    _avg?: DeckWordAvgOrderByAggregateInput;

    @Field(() => DeckWordMaxOrderByAggregateInput, {nullable:true})
    _max?: DeckWordMaxOrderByAggregateInput;

    @Field(() => DeckWordMinOrderByAggregateInput, {nullable:true})
    _min?: DeckWordMinOrderByAggregateInput;

    @Field(() => DeckWordSumOrderByAggregateInput, {nullable:true})
    _sum?: DeckWordSumOrderByAggregateInput;
}
