import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';
import { GenreModule } from './genre/genre.module';
import { ReviewModule } from './cheat-meal/review.module';
import { Movie } from './movie/movie.entity';
import { Genre } from './genre/genre.entity';
import { Review } from './cheat-meal/review.entity';
import { Theater } from './theater/theater.entity';
import { TheaterModule } from './theater/theater.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Movie, Genre, Review, Theater],
      synchronize: true,
    }),
    MovieModule,
    GenreModule,
    ReviewModule,
    TheaterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
