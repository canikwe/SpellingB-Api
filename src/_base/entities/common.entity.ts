import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export abstract class CommonEntity {
  @Field((type) => Int)
  id: number;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
