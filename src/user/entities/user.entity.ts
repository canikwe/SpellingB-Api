import { ObjectType, Field } from '@nestjs/graphql';
import { CommonEntity } from '../../_shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity('Users')
export class User extends CommonEntity {
  @Field()
  @Column({ type: 'varchar', length: 255 })
  firstName: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  email: string;
}
