import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { DictionaryEntry } from '../entities/dictionary-entry.entity';
import { WordRepository } from '../repositories/word.repository';
import * as faker from 'faker';

@Injectable()
export class WordService {
  constructor(
    private readonly wordRepository: WordRepository,
    private httpService: HttpService,
  ) {}

  async fetchWord(word: string): Promise<DictionaryEntry[]> {
    return this.httpService
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .toPromise()
      .then((res) => res.data)
      .catch(() => []);
  }

  async getRandomWord(): Promise<DictionaryEntry> {
    return this.httpService
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.randomWord}`)
      .toPromise()
      .then((res) => res.data[0])
      .catch(() => null);
  }

  private get randomWord() {
    return faker.random.word();
  }
}
