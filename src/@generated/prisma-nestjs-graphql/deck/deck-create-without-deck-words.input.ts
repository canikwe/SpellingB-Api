import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutDecksInput } from '../user/user-create-nested-one-without-decks.input';

@InputType()
export class DeckCreateWithoutDeckWordsInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;

    @Field(() => UserCreateNestedOneWithoutDecksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutDecksInput;
}
