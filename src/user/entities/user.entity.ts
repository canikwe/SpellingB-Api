import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity("Users")
export class User {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255})
  @Field(() => String)
  first_name: string;

  @Column({ type: "varchar", length: 255})
  @Field(() => String)
  last_name: string;
  
  @Column({ type: "varchar", length: 255})
  @Field(() => String)
  email: string;
  
  @Column({ type:'date'})
  @Field(() => Date)
  createdAt: Date;

  @Column({ type:'date'})
  @Field(() => Date)
  updatedAt: Date;
}
