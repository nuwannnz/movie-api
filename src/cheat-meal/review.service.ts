import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { Repository } from 'typeorm';
import { ReviewDto } from './review.dto';
import { Movie } from 'src/movie/movie.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  getById(id: number): Promise<Review> {
    return this.reviewRepository.findOne({
      where: { id },
      relations: {
        movie: true,
      },
    });
  }

  getByMovieId(id: number): Promise<Review[]> {
    return this.reviewRepository.find({
      where: { movie: { id: id } },
    });
  }

  getAll(): Promise<Review[]> {
    return this.reviewRepository.find({
      relations: {
        movie: true,
      },
    });
  }

  async add(dto: ReviewDto) {
    const review = new Review();
    review.review = dto.review;
    review.reviewTitle = dto.reviewTitle;
    review.rating = dto.rating;
    review.email = dto.email;
    review.userName = dto.userName;

    const movie = await this.movieRepository.findOneBy({
      id: dto.movieId,
    });
    review.movie = movie;

    this.reviewRepository.insert(review);
  }

  async update(id: number, dto: ReviewDto) {
    const review = new Review();

    review.id = id;
    review.review = dto.review;
    review.reviewTitle = dto.reviewTitle;
    review.rating = dto.rating;
    review.email = dto.email;
    review.userName = dto.userName;

    const movie = await this.movieRepository.findOneBy({
      id: dto.movieId,
    });
    review.movie = movie;

    this.reviewRepository.update({ id }, review);
  }

  delete(id: number) {
    this.reviewRepository.delete({ id });
  }
}
