import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordCreateWithoutDeckInput } from './deck-word-create-without-deck.input';
import { DeckWordCreateOrConnectWithoutDeckInput } from './deck-word-create-or-connect-without-deck.input';
import { DeckWordUpsertWithWhereUniqueWithoutDeckInput } from './deck-word-upsert-with-where-unique-without-deck.input';
import { DeckWordCreateManyDeckInputEnvelope } from './deck-word-create-many-deck-input-envelope.input';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';
import { DeckWordUpdateWithWhereUniqueWithoutDeckInput } from './deck-word-update-with-where-unique-without-deck.input';
import { DeckWordUpdateManyWithWhereWithoutDeckInput } from './deck-word-update-many-with-where-without-deck.input';
import { DeckWordScalarWhereInput } from './deck-word-scalar-where.input';

@InputType()
export class DeckWordUncheckedUpdateManyWithoutDeckInput {

    @Field(() => [DeckWordCreateWithoutDeckInput], {nullable:true})
    create?: Array<DeckWordCreateWithoutDeckInput>;

    @Field(() => [DeckWordCreateOrConnectWithoutDeckInput], {nullable:true})
    connectOrCreate?: Array<DeckWordCreateOrConnectWithoutDeckInput>;

    @Field(() => [DeckWordUpsertWithWhereUniqueWithoutDeckInput], {nullable:true})
    upsert?: Array<DeckWordUpsertWithWhereUniqueWithoutDeckInput>;

    @Field(() => DeckWordCreateManyDeckInputEnvelope, {nullable:true})
    createMany?: DeckWordCreateManyDeckInputEnvelope;

    @Field(() => [DeckWordWhereUniqueInput], {nullable:true})
    connect?: Array<DeckWordWhereUniqueInput>;

    @Field(() => [DeckWordWhereUniqueInput], {nullable:true})
    set?: Array<DeckWordWhereUniqueInput>;

    @Field(() => [DeckWordWhereUniqueInput], {nullable:true})
    disconnect?: Array<DeckWordWhereUniqueInput>;

    @Field(() => [DeckWordWhereUniqueInput], {nullable:true})
    delete?: Array<DeckWordWhereUniqueInput>;

    @Field(() => [DeckWordUpdateWithWhereUniqueWithoutDeckInput], {nullable:true})
    update?: Array<DeckWordUpdateWithWhereUniqueWithoutDeckInput>;

    @Field(() => [DeckWordUpdateManyWithWhereWithoutDeckInput], {nullable:true})
    updateMany?: Array<DeckWordUpdateManyWithWhereWithoutDeckInput>;

    @Field(() => [DeckWordScalarWhereInput], {nullable:true})
    deleteMany?: Array<DeckWordScalarWhereInput>;
}
