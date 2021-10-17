import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class WordScalarWhereWithAggregatesInput {

    @Field(() => [WordScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WordScalarWhereWithAggregatesInput>;

    @Field(() => [WordScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WordScalarWhereWithAggregatesInput>;

    @Field(() => [WordScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WordScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
