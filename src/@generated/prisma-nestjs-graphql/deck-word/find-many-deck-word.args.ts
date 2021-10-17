import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeckWordWhereInput } from './deck-word-where.input';
import { DeckWordOrderByWithRelationInput } from './deck-word-order-by-with-relation.input';
import { DeckWordWhereUniqueInput } from './deck-word-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeckWordScalarFieldEnum } from './deck-word-scalar-field.enum';

@ArgsType()
export class FindManyDeckWordArgs {

    @Field(() => DeckWordWhereInput, {nullable:true})
    where?: DeckWordWhereInput;

    @Field(() => [DeckWordOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeckWordOrderByWithRelationInput>;

    @Field(() => DeckWordWhereUniqueInput, {nullable:true})
    cursor?: DeckWordWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DeckWordScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DeckWordScalarFieldEnum>;
}
