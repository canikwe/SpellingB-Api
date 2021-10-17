import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordUpdateManyMutationInput } from './word-update-many-mutation.input';
import { WordWhereInput } from './word-where.input';

@ArgsType()
export class UpdateManyWordArgs {

    @Field(() => WordUpdateManyMutationInput, {nullable:false})
    data!: WordUpdateManyMutationInput;

    @Field(() => WordWhereInput, {nullable:true})
    where?: WordWhereInput;
}
