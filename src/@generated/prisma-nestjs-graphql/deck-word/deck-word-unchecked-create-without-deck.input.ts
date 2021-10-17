import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DeckWordUncheckedCreateWithoutDeckInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    starred!: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Int, {nullable:false})
    wordId!: number;
}
