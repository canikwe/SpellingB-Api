import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckScalarWhereInput } from './deck-scalar-where.input';
import { DeckUpdateManyMutationInput } from './deck-update-many-mutation.input';

@InputType()
export class DeckUpdateManyWithWhereWithoutUserInput {

    @Field(() => DeckScalarWhereInput, {nullable:false})
    where!: DeckScalarWhereInput;

    @Field(() => DeckUpdateManyMutationInput, {nullable:false})
    data!: DeckUpdateManyMutationInput;
}
