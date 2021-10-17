import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DeckRelationFilter } from '../deck/deck-relation-filter.input';
import { WordRelationFilter } from '../word/word-relation-filter.input';

@InputType()
export class DeckWordWhereInput {

    @Field(() => [DeckWordWhereInput], {nullable:true})
    AND?: Array<DeckWordWhereInput>;

    @Field(() => [DeckWordWhereInput], {nullable:true})
    OR?: Array<DeckWordWhereInput>;

    @Field(() => [DeckWordWhereInput], {nullable:true})
    NOT?: Array<DeckWordWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    starred?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    wordId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    deckId?: IntFilter;

    @Field(() => DeckRelationFilter, {nullable:true})
    deck?: DeckRelationFilter;

    @Field(() => WordRelationFilter, {nullable:true})
    word?: WordRelationFilter;
}
