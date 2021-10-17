import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WordWhereInput } from './word-where.input';

@InputType()
export class WordRelationFilter {

    @Field(() => WordWhereInput, {nullable:true})
    is?: WordWhereInput;

    @Field(() => WordWhereInput, {nullable:true})
    isNot?: WordWhereInput;
}
