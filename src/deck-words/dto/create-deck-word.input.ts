import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDeckWordInput {
  @Field()
  starred: boolean;

  @Field()
  order: number;

  @Field((type) => Int)
  wordId: number;

  @Field((type) => Int)
  deckId: number;
}
