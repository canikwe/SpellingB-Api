import { registerEnumType } from '@nestjs/graphql';

export enum DeckWordScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    starred = "starred",
    order = "order",
    wordId = "wordId",
    deckId = "deckId"
}


registerEnumType(DeckWordScalarFieldEnum, { name: 'DeckWordScalarFieldEnum', description: undefined })
