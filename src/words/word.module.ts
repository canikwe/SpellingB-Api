import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordResolver } from './word.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './entities/word.entity';

@Module({
  providers: [WordResolver, WordService],
  imports: [TypeOrmModule.forFeature([Word])],
})
export class WordModule {}
