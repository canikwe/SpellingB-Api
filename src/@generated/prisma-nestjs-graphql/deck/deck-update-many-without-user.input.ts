import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckCreateWithoutUserInput } from './deck-create-without-user.input';
import { DeckCreateOrConnectWithoutUserInput } from './deck-create-or-connect-without-user.input';
import { DeckUpsertWithWhereUniqueWithoutUserInput } from './deck-upsert-with-where-unique-without-user.input';
import { DeckCreateManyUserInputEnvelope } from './deck-create-many-user-input-envelope.input';
import { DeckWhereUniqueInput } from './deck-where-unique.input';
import { DeckUpdateWithWhereUniqueWithoutUserInput } from './deck-update-with-where-unique-without-user.input';
import { DeckUpdateManyWithWhereWithoutUserInput } from './deck-update-many-with-where-without-user.input';
import { DeckScalarWhereInput } from './deck-scalar-where.input';

@InputType()
export class DeckUpdateManyWithoutUserInput {

    @Field(() => [DeckCreateWithoutUserInput], {nullable:true})
    create?: Array<DeckCreateWithoutUserInput>;

    @Field(() => [DeckCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<DeckCreateOrConnectWithoutUserInput>;

    @Field(() => [DeckUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<DeckUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => DeckCreateManyUserInputEnvelope, {nullable:true})
    createMany?: DeckCreateManyUserInputEnvelope;

    @Field(() => [DeckWhereUniqueInput], {nullable:true})
    connect?: Array<DeckWhereUniqueInput>;

    @Field(() => [DeckWhereUniqueInput], {nullable:true})
    set?: Array<DeckWhereUniqueInput>;

    @Field(() => [DeckWhereUniqueInput], {nullable:true})
    disconnect?: Array<DeckWhereUniqueInput>;

    @Field(() => [DeckWhereUniqueInput], {nullable:true})
    delete?: Array<DeckWhereUniqueInput>;

    @Field(() => [DeckUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<DeckUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [DeckUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<DeckUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [DeckScalarWhereInput], {nullable:true})
    deleteMany?: Array<DeckScalarWhereInput>;
}
