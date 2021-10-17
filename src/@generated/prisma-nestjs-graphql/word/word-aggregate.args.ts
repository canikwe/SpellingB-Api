import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordWhereInput } from './word-where.input';
import { WordOrderByWithRelationInput } from './word-order-by-with-relation.input';
import { WordWhereUniqueInput } from './word-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WordCountAggregateInput } from './word-count-aggregate.input';
import { WordAvgAggregateInput } from './word-avg-aggregate.input';
import { WordSumAggregateInput } from './word-sum-aggregate.input';
import { WordMinAggregateInput } from './word-min-aggregate.input';
import { WordMaxAggregateInput } from './word-max-aggregate.input';

@ArgsType()
export class WordAggregateArgs {

    @Field(() => WordWhereInput, {nullable:true})
    where?: WordWhereInput;

    @Field(() => [WordOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WordOrderByWithRelationInput>;

    @Field(() => WordWhereUniqueInput, {nullable:true})
    cursor?: WordWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WordCountAggregateInput, {nullable:true})
    _count?: WordCountAggregateInput;

    @Field(() => WordAvgAggregateInput, {nullable:true})
    _avg?: WordAvgAggregateInput;

    @Field(() => WordSumAggregateInput, {nullable:true})
    _sum?: WordSumAggregateInput;

    @Field(() => WordMinAggregateInput, {nullable:true})
    _min?: WordMinAggregateInput;

    @Field(() => WordMaxAggregateInput, {nullable:true})
    _max?: WordMaxAggregateInput;
}
