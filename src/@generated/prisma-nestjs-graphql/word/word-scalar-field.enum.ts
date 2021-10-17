import { registerEnumType } from '@nestjs/graphql';

export enum WordScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name"
}


registerEnumType(WordScalarFieldEnum, { name: 'WordScalarFieldEnum', description: undefined })
