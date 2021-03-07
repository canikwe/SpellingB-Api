import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/_base/services/prisma.service';
import { DeckWord } from '../entities/deck-word.entity';

/**
 * Repository wrapper class for DeckWord Repository. Contains all persistence and
 * logging logic instead of mixing with the service's business logic.
 */
@Injectable()
export class DeckWordRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async find(): Promise<DeckWord[]> {
    return this.prisma.deckWords.findMany();
  }
  async findOne(id: number): Promise<DeckWord> {
    return this.prisma.deckWords.findFirst({ where: { id } });
  }
  async create(): Promise<DeckWord> {
    return; /** _baseRepo save goes here */
  }
  async update(): Promise<DeckWord> {
    return; /** _baseRepo update goes here */
  }

  async delete(id: number): Promise<DeckWord> {
    return; /** _baseRepo remove goes here. Reminder, .remove does not return the removed record's id! */
  }
}
