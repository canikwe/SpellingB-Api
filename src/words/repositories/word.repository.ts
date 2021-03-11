import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/_base/services/prisma.service';

/**
 * Repository wrapper class for Word Repository. Contains all persistence and
 * logging logic instead of mixing with the service's business logic.
 */
@Injectable()
export class WordRepository {
  constructor(private prisma: PrismaService) {}

  // async create(): Promise<Word> {
  //   return; /** _baseRepo save goes here */
  // }
  // async update(): Promise<Word> {
  //   return; /** _baseRepo update goes here */
  // }

  // async delete(id: number): Promise<Word> {
  //   return; /** _baseRepo remove goes here. Reminder, .remove does not return the removed record's id! */
  // }
}
