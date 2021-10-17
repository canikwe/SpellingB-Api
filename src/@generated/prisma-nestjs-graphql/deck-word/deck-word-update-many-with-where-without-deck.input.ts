import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordScalarWhereInput } from './deck-word-scalar-where.input';
import { DeckWordUpdateManyMutationInput } from './deck-word-update-many-mutation.input';

@InputType()
export class DeckWordUpdateManyWithWhereWithoutDeckInput {

    @Field(() => DeckWordScalarWhereInput, {nullable:false})
    where!: DeckWordScalarWhereInput;

    @Field(() => DeckWordUpdateManyMutationInput, {nullable:false})
    data!: DeckWordUpdateManyMutationInput;
}
