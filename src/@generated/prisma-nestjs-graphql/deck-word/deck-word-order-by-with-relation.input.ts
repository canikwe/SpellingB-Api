import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeckOrderByWithRelationInput } from '../deck/deck-order-by-with-relation.input';
import { WordOrderByWithRelationInput } from '../word/word-order-by-with-relation.input';

@InputType()
export class DeckWordOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    starred?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wordId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deckId?: keyof typeof SortOrder;

    @Field(() => DeckOrderByWithRelationInput, {nullable:true})
    deck?: DeckOrderByWithRelationInput;

    @Field(() => WordOrderByWithRelationInput, {nullable:true})
    word?: WordOrderByWithRelationInput;
}
