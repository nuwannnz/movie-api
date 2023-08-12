import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { Review } from './review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/movie/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Movie])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
