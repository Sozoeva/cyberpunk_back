import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  img: string;

  @Column()
  description: string;
}
