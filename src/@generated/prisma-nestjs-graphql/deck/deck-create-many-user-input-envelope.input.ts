import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckCreateManyUserInput } from './deck-create-many-user.input';

@InputType()
export class DeckCreateManyUserInputEnvelope {

    @Field(() => [DeckCreateManyUserInput], {nullable:false})
    data!: Array<DeckCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
