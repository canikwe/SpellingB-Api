import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { DictionaryWordRes } from '../entities/dictionary-word-response.entity';
import { WordRepository } from '../repositories/word.repository';
import * as faker from 'faker';

@Injectable()
export class WordService {
  constructor(
    private readonly wordRepository: WordRepository,
    private httpService: HttpService,
  ) {}

  async fetchWord(word: string): Promise<DictionaryWordRes[]> {
    return this.httpService
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .toPromise()
      .then((res) => res.data)
      .catch(() => []);
  }

  async getRandomWord(): Promise<DictionaryWordRes> {
    return this.httpService
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.randomWord}`)
      .toPromise()
      .then((res) => res.data[0])
      .catch(() => ({}));
  }

  private get randomWord() {
    return faker.random.word();
  }
}
