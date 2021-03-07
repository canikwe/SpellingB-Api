import { InputType, Int, Field, PartialType, PickType } from '@nestjs/graphql';
import { Deck } from '../entities/deck.entity';

// @InputType()
// export class CreateDeckInput {
//   @Field()
//   title: string;

//   @Field()
//   isPublic: boolean;

//   @Field((type) => Int)
//   userId: number;
// }
@InputType()
export class CreateDeckInput extends PickType(
  Deck,
  ['title', 'isPublic', 'userId'],
  InputType,
) {
  // @Field()
  // title: string;
  // @Field()
  // isPublic: boolean;
  // @Field((type) => Int)
  // userId: number;
}
