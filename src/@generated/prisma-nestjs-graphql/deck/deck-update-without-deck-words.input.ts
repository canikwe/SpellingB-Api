import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutDecksInput } from '../user/user-update-one-required-without-decks.input';

@InputType()
export class DeckUpdateWithoutDeckWordsInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPublic?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutDecksInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutDecksInput;
}