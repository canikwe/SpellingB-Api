import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/_base/services/prisma.service';
import { Word } from '../entities/word.entity';

/**
 * Repository wrapper class for Word Repository. Contains all persistence and
 * logging logic instead of mixing with the service's business logic.
 */
@Injectable()
export class WordRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async find(): Promise<Word[]> {
    return this.prisma.words.findMany();
  }
  async findOne(id: number): Promise<Word> {
    return this.prisma.words.findFirst({ where: { id } });
  }
  async create(): Promise<Word> {
    return; /** _baseRepo save goes here */
  }
  async update(): Promise<Word> {
    return; /** _baseRepo update goes here */
  }

  async delete(id: number): Promise<Word> {
    return; /** _baseRepo remove goes here. Reminder, .remove does not return the removed record's id! */
  }
}
