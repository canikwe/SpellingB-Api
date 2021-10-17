import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWhereInput } from './deck-where.input';
import { DeckOrderByWithRelationInput } from './deck-order-by-with-relation.input';
import { DeckWhereUniqueInput } from './deck-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeckScalarFieldEnum } from './deck-scalar-field.enum';

@ArgsType()
export class FindManyDeckArgs {

    @Field(() => DeckWhereInput, {nullable:true})
    where?: DeckWhereInput;

    @Field(() => [DeckOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeckOrderByWithRelationInput>;

    @Field(() => DeckWhereUniqueInput, {nullable:true})
    cursor?: DeckWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DeckScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DeckScalarFieldEnum>;
}
