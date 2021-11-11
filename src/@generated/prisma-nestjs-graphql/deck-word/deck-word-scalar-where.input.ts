import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class DeckWordScalarWhereInput {
  @Field(() => [DeckWordScalarWhereInput], { nullable: true })
  AND?: Array<DeckWordScalarWhereInput>;

  @Field(() => [DeckWordScalarWhereInput], { nullable: true })
  OR?: Array<DeckWordScalarWhereInput>;

  @Field(() => [DeckWordScalarWhereInput], { nullable: true })
  NOT?: Array<DeckWordScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  starred?: BoolFilter;

  @Field(() => IntFilter, { nullable: true })
  order?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  wordId?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  deckId?: IntFilter;
}
