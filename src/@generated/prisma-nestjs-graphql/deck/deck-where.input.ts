import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DeckWordListRelationFilter } from '../deck-word/deck-word-list-relation-filter.input';

@InputType()
export class DeckWhereInput {

    @Field(() => [DeckWhereInput], {nullable:true})
    AND?: Array<DeckWhereInput>;

    @Field(() => [DeckWhereInput], {nullable:true})
    OR?: Array<DeckWhereInput>;

    @Field(() => [DeckWhereInput], {nullable:true})
    NOT?: Array<DeckWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPublic?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => DeckWordListRelationFilter, {nullable:true})
    deckWords?: DeckWordListRelationFilter;
}
