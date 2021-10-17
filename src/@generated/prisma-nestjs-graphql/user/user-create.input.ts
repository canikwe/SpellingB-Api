import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeckCreateNestedManyWithoutUserInput } from '../deck/deck-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DeckCreateNestedManyWithoutUserInput, {nullable:true})
    decks?: DeckCreateNestedManyWithoutUserInput;
}
