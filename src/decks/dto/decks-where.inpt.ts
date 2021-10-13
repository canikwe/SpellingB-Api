import { InputType } from '@nestjs/graphql';
import { BaseWhereDto } from '../../_base/dtos/base-where.args';
import { Deck } from '../entities/deck.entity';

@InputType()
export class DecksWhereInput extends BaseWhereDto(Deck) {}
