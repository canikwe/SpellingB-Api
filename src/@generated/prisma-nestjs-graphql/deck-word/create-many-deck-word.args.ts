import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWordCreateManyInput } from './deck-word-create-many.input';

@ArgsType()
export class CreateManyDeckWordArgs {

    @Field(() => [DeckWordCreateManyInput], {nullable:false})
    data!: Array<DeckWordCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
