import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('Users')
export class User {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  firstName: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Field((type) => Date)
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
