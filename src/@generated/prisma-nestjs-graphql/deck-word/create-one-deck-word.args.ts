import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWordCreateInput } from './deck-word-create.input';

@ArgsType()
export class CreateOneDeckWordArgs {

    @Field(() => DeckWordCreateInput, {nullable:false})
    data!: DeckWordCreateInput;
}
