import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDecksInput } from './user-create-without-decks.input';
import { UserCreateOrConnectWithoutDecksInput } from './user-create-or-connect-without-decks.input';
import { UserUpsertWithoutDecksInput } from './user-upsert-without-decks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutDecksInput } from './user-update-without-decks.input';

@InputType()
export class UserUpdateOneRequiredWithoutDecksInput {

    @Field(() => UserCreateWithoutDecksInput, {nullable:true})
    create?: UserCreateWithoutDecksInput;

    @Field(() => UserCreateOrConnectWithoutDecksInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput;

    @Field(() => UserUpsertWithoutDecksInput, {nullable:true})
    upsert?: UserUpsertWithoutDecksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutDecksInput, {nullable:true})
    update?: UserUpdateWithoutDecksInput;
}
