import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckWordCreateManyDeckInput } from './deck-word-create-many-deck.input';

@InputType()
export class DeckWordCreateManyDeckInputEnvelope {

    @Field(() => [DeckWordCreateManyDeckInput], {nullable:false})
    data!: Array<DeckWordCreateManyDeckInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
