import { registerEnumType } from '@nestjs/graphql';

export enum DeckScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    isPublic = "isPublic",
    userId = "userId"
}


registerEnumType(DeckScalarFieldEnum, { name: 'DeckScalarFieldEnum', description: undefined })
