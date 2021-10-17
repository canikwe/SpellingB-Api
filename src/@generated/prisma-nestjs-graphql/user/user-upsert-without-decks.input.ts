import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDecksInput } from './user-update-without-decks.input';
import { UserCreateWithoutDecksInput } from './user-create-without-decks.input';

@InputType()
export class UserUpsertWithoutDecksInput {

    @Field(() => UserUpdateWithoutDecksInput, {nullable:false})
    update!: UserUpdateWithoutDecksInput;

    @Field(() => UserCreateWithoutDecksInput, {nullable:false})
    create!: UserCreateWithoutDecksInput;
}
