import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { CommonEntity } from 'src/_shared/entities/common.entity';

@ObjectType()
@Entity('Words')
export class Word extends CommonEntity {
  @Field((type) => Int)
  @Column()
  name: string;
}
