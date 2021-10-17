import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordCreateWithoutDeckInput } from './deck-word-create-without-deck.input';
import { DeckWordCreateOrConnectWithoutDeckInput } from './deck-word-create-or-connect-without-deck.input';
import { DeckWordCreateManyDeckInputEnvelope } from './deck-word-create-many-deck-input-envelope.input';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';

@InputType()
export class DeckWordCreateNestedManyWithoutDeckInput {
  @Field(() => [DeckWordCreateWithoutDeckInput], { nullable: true })
  create?: Array<DeckWordCreateWithoutDeckInput>;

  @Field(() => [DeckWordCreateOrConnectWithoutDeckInput], { nullable: true })
  connectOrCreate?: Array<DeckWordCreateOrConnectWithoutDeckInput>;

  @Field(() => DeckWordCreateManyDeckInputEnvelope, { nullable: true })
  createMany?: DeckWordCreateManyDeckInputEnvelope;

  @Field(() => [DeckWordWhereUniqueInput], { nullable: true })
  connect?: Array<DeckWordWhereUniqueInput>;
}
