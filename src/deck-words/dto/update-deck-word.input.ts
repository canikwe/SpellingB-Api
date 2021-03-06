import { CreateDeckWordInput } from './create-deck-word.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDeckWordInput extends PartialType(CreateDeckWordInput) {
  @Field(() => Int)
  id: number;
}
