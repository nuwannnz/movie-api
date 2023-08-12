import { Movie } from 'src/movie/movie.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column()
  review: string;

  @Column()
  email: string;

  @Column()
  userName: string;

  @Column()
  reviewTitle: string;

  @ManyToOne(() => Movie, (record) => record.reviews)
  movie: Movie;
}
