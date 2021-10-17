import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWordWhereInput } from './deck-word-where.input';

@ArgsType()
export class DeleteManyDeckWordArgs {

    @Field(() => DeckWordWhereInput, {nullable:true})
    where?: DeckWordWhereInput;
}
