import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DeckWordListRelationFilter } from '../deck-word/deck-word-list-relation-filter.input';

@InputType()
export class WordWhereInput {

    @Field(() => [WordWhereInput], {nullable:true})
    AND?: Array<WordWhereInput>;

    @Field(() => [WordWhereInput], {nullable:true})
    OR?: Array<WordWhereInput>;

    @Field(() => [WordWhereInput], {nullable:true})
    NOT?: Array<WordWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DeckWordListRelationFilter, {nullable:true})
    deckWords?: DeckWordListRelationFilter;
}
