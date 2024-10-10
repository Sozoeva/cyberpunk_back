import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  img: string;

  @Column()
  description: string;
}
