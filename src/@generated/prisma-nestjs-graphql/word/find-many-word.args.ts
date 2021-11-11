import { Field, InputType } from '@nestjs/graphql';
import { WordWhereInput } from './word-where.input';
import { WordOrderByWithRelationInput } from './word-order-by-with-relation.input';
import { WordWhereUniqueInput } from './word-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WordScalarFieldEnum } from './word-scalar-field.enum';

@InputType()
export class FindManyWordArgs {
  @Field(() => WordWhereInput, { nullable: true })
  where?: WordWhereInput;

  @Field(() => [WordOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<WordOrderByWithRelationInput>;

  @Field(() => WordWhereUniqueInput, { nullable: true })
  cursor?: WordWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [WordScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof WordScalarFieldEnum>;
}
