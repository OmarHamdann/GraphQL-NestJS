/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column()
  @Field((type) => Int)
  ownerId: number;

  @ManyToOne((type) => Owner, (owner) => owner.pets)
  @Field((type) => [Owner], { nullable: true })
  owners: Owner[];
}
