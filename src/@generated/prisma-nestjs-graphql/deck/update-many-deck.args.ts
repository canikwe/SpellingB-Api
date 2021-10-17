import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckUpdateManyMutationInput } from './deck-update-many-mutation.input';
import { DeckWhereInput } from './deck-where.input';

@ArgsType()
export class UpdateManyDeckArgs {

    @Field(() => DeckUpdateManyMutationInput, {nullable:false})
    data!: DeckUpdateManyMutationInput;

    @Field(() => DeckWhereInput, {nullable:true})
    where?: DeckWhereInput;
}
