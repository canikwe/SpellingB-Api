import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckCreateWithoutUserInput } from './deck-create-without-user.input';
import { DeckCreateOrConnectWithoutUserInput } from './deck-create-or-connect-without-user.input';
import { DeckCreateManyUserInputEnvelope } from './deck-create-many-user-input-envelope.input';
import { DeckWhereUniqueInput } from './deck-where-unique.input';

@InputType()
export class DeckUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [DeckCreateWithoutUserInput], {nullable:true})
    create?: Array<DeckCreateWithoutUserInput>;

    @Field(() => [DeckCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<DeckCreateOrConnectWithoutUserInput>;

    @Field(() => DeckCreateManyUserInputEnvelope, {nullable:true})
    createMany?: DeckCreateManyUserInputEnvelope;

    @Field(() => [DeckWhereUniqueInput], {nullable:true})
    connect?: Array<DeckWhereUniqueInput>;
}
