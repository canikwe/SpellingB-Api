import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class DeckScalarWhereInput {

    @Field(() => [DeckScalarWhereInput], {nullable:true})
    AND?: Array<DeckScalarWhereInput>;

    @Field(() => [DeckScalarWhereInput], {nullable:true})
    OR?: Array<DeckScalarWhereInput>;

    @Field(() => [DeckScalarWhereInput], {nullable:true})
    NOT?: Array<DeckScalarWhereInput>;

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
}
