import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutDecksInput } from './user-create-without-decks.input';

@InputType()
export class UserCreateOrConnectWithoutDecksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutDecksInput, {nullable:false})
    create!: UserCreateWithoutDecksInput;
}
