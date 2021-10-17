import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordCreateManyWordInput } from './deck-word-create-many-word.input';

@InputType()
export class DeckWordCreateManyWordInputEnvelope {

    @Field(() => [DeckWordCreateManyWordInput], {nullable:false})
    data!: Array<DeckWordCreateManyWordInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
