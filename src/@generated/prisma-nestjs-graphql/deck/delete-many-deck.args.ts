import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWhereInput } from './deck-where.input';

@ArgsType()
export class DeleteManyDeckArgs {

    @Field(() => DeckWhereInput, {nullable:true})
    where?: DeckWhereInput;
}
