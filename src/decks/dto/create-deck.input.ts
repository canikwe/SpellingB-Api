import { InputType, PickType } from '@nestjs/graphql';
import { Deck } from '../entities/deck.entity';

@InputType()
export class CreateDeckInput extends PickType(
  Deck,
  ['title', 'isPublic', 'userId'],
  InputType,
) {}
