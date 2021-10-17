import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckCreateManyInput } from './deck-create-many.input';

@ArgsType()
export class CreateManyDeckArgs {

    @Field(() => [DeckCreateManyInput], {nullable:false})
    data!: Array<DeckCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
