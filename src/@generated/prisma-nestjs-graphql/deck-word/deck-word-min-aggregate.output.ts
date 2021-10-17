import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DeckWordMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    starred?: boolean;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    wordId?: number;

    @Field(() => Int, {nullable:true})
    deckId?: number;
}
