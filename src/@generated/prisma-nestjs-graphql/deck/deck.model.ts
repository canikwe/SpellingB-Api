import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { DeckWord } from '../deck-word/deck-word.model';
import { DeckCount } from './deck-count.output';

@ObjectType()
export class Deck {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [DeckWord], {nullable:true})
    deckWords?: Array<DeckWord>;

    @Field(() => DeckCount, {nullable:true})
    _count?: DeckCount | null;
}
