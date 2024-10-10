import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  img: string;
}
