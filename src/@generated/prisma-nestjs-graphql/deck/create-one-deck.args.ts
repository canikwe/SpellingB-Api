import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckCreateInput } from './deck-create.input';

@ArgsType()
export class CreateOneDeckArgs {

    @Field(() => DeckCreateInput, {nullable:false})
    data!: DeckCreateInput;
}
