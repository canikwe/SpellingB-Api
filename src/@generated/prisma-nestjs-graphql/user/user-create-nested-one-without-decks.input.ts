import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDecksInput } from './user-create-without-decks.input';
import { UserCreateOrConnectWithoutDecksInput } from './user-create-or-connect-without-decks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDecksInput {

    @Field(() => UserCreateWithoutDecksInput, {nullable:true})
    create?: UserCreateWithoutDecksInput;

    @Field(() => UserCreateOrConnectWithoutDecksInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
