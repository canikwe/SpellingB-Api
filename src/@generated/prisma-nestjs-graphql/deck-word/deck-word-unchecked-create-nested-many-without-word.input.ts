import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordCreateWithoutWordInput } from './deck-word-create-without-word.input';
import { DeckWordCreateOrConnectWithoutWordInput } from './deck-word-create-or-connect-without-word.input';
import { DeckWordCreateManyWordInputEnvelope } from './deck-word-create-many-word-input-envelope.input';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';

@InputType()
export class DeckWordUncheckedCreateNestedManyWithoutWordInput {

    @Field(() => [DeckWordCreateWithoutWordInput], {nullable:true})
    create?: Array<DeckWordCreateWithoutWordInput>;

    @Field(() => [DeckWordCreateOrConnectWithoutWordInput], {nullable:true})
    connectOrCreate?: Array<DeckWordCreateOrConnectWithoutWordInput>;

    @Field(() => DeckWordCreateManyWordInputEnvelope, {nullable:true})
    createMany?: DeckWordCreateManyWordInputEnvelope;

    @Field(() => [DeckWordWhereUniqueInput], {nullable:true})
    connect?: Array<DeckWordWhereUniqueInput>;
}
