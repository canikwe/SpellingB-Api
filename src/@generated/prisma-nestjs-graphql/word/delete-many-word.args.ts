import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordWhereInput } from './word-where.input';

@ArgsType()
export class DeleteManyWordArgs {

    @Field(() => WordWhereInput, {nullable:true})
    where?: WordWhereInput;
}
