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
  language: string;

  @Column()
  country: string;

  @Column()
  poster: string;

  @Column()
  released: Date;

  @Column()
  genre: string;

  @Column('simple-array')
  favorites: string[];

  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];

  getPopularityScore(): number {
    const totalReviews = this.reviews.length;
    let totalScore = 0;

    for (const review of this.reviews) {
      totalScore += review.rating;
    }

    const averageRating = totalScore / totalReviews;
    const daysSinceRelease =
      (new Date().getTime() - this.released.getTime()) / (24 * 60 * 60 * 1000);
    const popularityScore =
      0.7 * averageRating + 0.3 * Math.exp(-daysSinceRelease / 30);

    return popularityScore;
  }
}
