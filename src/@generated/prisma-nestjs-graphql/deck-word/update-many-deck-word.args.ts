import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWordUpdateManyMutationInput } from './deck-word-update-many-mutation.input';
import { DeckWordWhereInput } from './deck-word-where.input';

@ArgsType()
export class UpdateManyDeckWordArgs {

    @Field(() => DeckWordUpdateManyMutationInput, {nullable:false})
    data!: DeckWordUpdateManyMutationInput;

    @Field(() => DeckWordWhereInput, {nullable:true})
    where?: DeckWordWhereInput;
}
