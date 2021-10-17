import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DeckCount {

    @Field(() => Int, {nullable:false})
    deckWords!: number;
}
