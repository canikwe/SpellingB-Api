import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDeckInput {
  @Field()
  title: string;

  @Field()
  isPublic: boolean;

  @Field((type) => Int)
  userId: number;
}
