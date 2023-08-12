import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Theater {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}
