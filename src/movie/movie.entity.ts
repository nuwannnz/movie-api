import { Review } from 'src/cheat-meal/review.entity';
import { Genre } from 'src/genre/genre.entity';
import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  runtime: number;

  @Column()
  director: string;

  @Column()
  writer: string;

  @Column()
  actors: string;

  @Column()
  plot: string;

  @Column()
  langage: string;

  @Column()
  country: string;

  @Column()
  poster: string;

  @Column()
  released: Date;

  @ManyToMany(() => Genre)
  @JoinTable()
  genre: Genre[];

  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];
}