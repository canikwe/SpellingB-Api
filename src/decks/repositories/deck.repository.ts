import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/_base/services/prisma.service';
import { Deck } from '../entities/deck.entity';

/**
 * Repository wrapper class for Deck Repository. Contains all persistence and
 * logging logic instead of mixing with the service's business logic.
 */
@Injectable()
export class DeckRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async find(): Promise<Deck[]> {
    return this.prisma.decks.findMany();
  }
  async findOne(id: number): Promise<Deck> {
    return this.prisma.decks.findFirst({ where: { id } });
  }
  async create(): Promise<Deck> {
    return; /** _baseRepo save goes here */
  }
  async update(): Promise<Deck> {
    return; /** _baseRepo update goes here */
  }

  async delete(id: number): Promise<Deck> {
    return; /** _baseRepo remove goes here. Reminder, .remove does not return the removed record's id! */
  }
}
