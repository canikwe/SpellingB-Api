import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class DeckWordScalarWhereWithAggregatesInput {

    @Field(() => [DeckWordScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DeckWordScalarWhereWithAggregatesInput>;

    @Field(() => [DeckWordScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DeckWordScalarWhereWithAggregatesInput>;

    @Field(() => [DeckWordScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DeckWordScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    starred?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    wordId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    deckId?: IntWithAggregatesFilter;
}
