import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordCreateWithoutWordInput } from './deck-word-create-without-word.input';
import { DeckWordCreateOrConnectWithoutWordInput } from './deck-word-create-or-connect-without-word.input';
import { DeckWordUpsertWithWhereUniqueWithoutWordInput } from './deck-word-upsert-with-where-unique-without-word.input';
import { DeckWordCreateManyWordInputEnvelope } from './deck-word-create-many-word-input-envelope.input';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';
import { DeckWordUpdateWithWhereUniqueWithoutWordInput } from './deck-word-update-with-where-unique-without-word.input';
import { DeckWordUpdateManyWithWhereWithoutWordInput } from './deck-word-update-many-with-where-without-word.input';
import { DeckWordScalarWhereInput } from './deck-word-scalar-where.input';

@InputType()
export class DeckWordUncheckedUpdateManyWithoutWordInput {

    @Field(() => [DeckWordCreateWithoutWordInput], {nullable:true})
    create?: Array<DeckWordCreateWithoutWordInput>;

    @Field(() => [DeckWordCreateOrConnectWithoutWordInput], {nullable:true})
    connectOrCreate?: Array<DeckWordCreateOrConnectWithoutWordInput>;

    @Field(() => [DeckWordUpsertWithWhereUniqueWithoutWordInput], {nullable:true})
    upsert?: Array<DeckWordUpsertWithWhereUniqueWithoutWordInput>;

    @Field(() => DeckWordCreateManyWordInputEnvelope, {nullable:true})
    createMany?: DeckWordCreateManyWordInputEnvelope;

    @Field(() => [DeckWordWhereUniqueInput], {nullable:true})
    connect?: Array<DeckWordWhereUniqueInput>;

    @Field(() => [DeckWordWhereUniqueInput], {nullable:true})
    set?: Array<DeckWordWhereUniqueInput>;

    @Field(() => [DeckWordWhereUniqueInput], {nullable:true})
    disconnect?: Array<DeckWordWhereUniqueInput>;

    @Field(() => [DeckWordWhereUniqueInput], {nullable:true})
    delete?: Array<DeckWordWhereUniqueInput>;

    @Field(() => [DeckWordUpdateWithWhereUniqueWithoutWordInput], {nullable:true})
    update?: Array<DeckWordUpdateWithWhereUniqueWithoutWordInput>;

    @Field(() => [DeckWordUpdateManyWithWhereWithoutWordInput], {nullable:true})
    updateMany?: Array<DeckWordUpdateManyWithWhereWithoutWordInput>;

    @Field(() => [DeckWordScalarWhereInput], {nullable:true})
    deleteMany?: Array<DeckWordScalarWhereInput>;
}
