import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
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

  @Column({ type: 'varchar', length: 255 })
  @Field(() => String)
  firstName: string;

  @Column({ type: 'varchar', length: 255 })
  @Field(() => String)
  lastName: string;

  @Column({ type: 'varchar', length: 255 })
  @Field(() => String)
  email: string;

  @CreateDateColumn({ type: 'timestamp' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @Field(() => Date)
  updatedAt: Date;
}
