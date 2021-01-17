import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { CommonEntity } from '../../_shared/entities/common.entity';

@ObjectType()
@Entity('Decks')
export class Deck extends CommonEntity {
  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  isPublic: boolean;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.decks)
  user: User;

  @Field((type) => Int)
  @Column('int')
  userId: number;
}
