import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DeckUpdateOneRequiredWithoutDeckWordsInput } from '../deck/deck-update-one-required-without-deck-words.input';
import { WordUpdateOneRequiredWithoutDeckWordsInput } from '../word/word-update-one-required-without-deck-words.input';

@InputType()
export class DeckWordUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    starred?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => DeckUpdateOneRequiredWithoutDeckWordsInput, {nullable:true})
    deck?: DeckUpdateOneRequiredWithoutDeckWordsInput;

    @Field(() => WordUpdateOneRequiredWithoutDeckWordsInput, {nullable:true})
    word?: WordUpdateOneRequiredWithoutDeckWordsInput;
}
