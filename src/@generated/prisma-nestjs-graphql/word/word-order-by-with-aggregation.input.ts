import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WordCountOrderByAggregateInput } from './word-count-order-by-aggregate.input';
import { WordAvgOrderByAggregateInput } from './word-avg-order-by-aggregate.input';
import { WordMaxOrderByAggregateInput } from './word-max-order-by-aggregate.input';
import { WordMinOrderByAggregateInput } from './word-min-order-by-aggregate.input';
import { WordSumOrderByAggregateInput } from './word-sum-order-by-aggregate.input';

@InputType()
export class WordOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => WordCountOrderByAggregateInput, {nullable:true})
    _count?: WordCountOrderByAggregateInput;

    @Field(() => WordAvgOrderByAggregateInput, {nullable:true})
    _avg?: WordAvgOrderByAggregateInput;

    @Field(() => WordMaxOrderByAggregateInput, {nullable:true})
    _max?: WordMaxOrderByAggregateInput;

    @Field(() => WordMinOrderByAggregateInput, {nullable:true})
    _min?: WordMinOrderByAggregateInput;

    @Field(() => WordSumOrderByAggregateInput, {nullable:true})
    _sum?: WordSumOrderByAggregateInput;
}
