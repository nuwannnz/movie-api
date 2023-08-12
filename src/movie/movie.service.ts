import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { Repository } from 'typeorm';
import { MoviewDto } from './moview.dto';
import { Genre } from 'src/genre/genre.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}

  getById(id: number): Promise<Movie> {
    return this.movieRepository.findOne({
      where: { id },
      relations: {
        reviews: true,
      },
    });
  }

  getAll(): Promise<Movie[]> {
    return this.movieRepository.find({
      relations: {
        reviews: true,
      },
    });
  }

  async add(dto: MoviewDto) {
    const movie = new Movie();
    movie.actors = dto.actors;
    movie.country = dto.country;
    movie.director = dto.director;
    movie.language = dto.language;
    movie.plot = dto.plot;
    movie.poster = dto.poster;
    movie.runtime = dto.runtime;
    movie.title = dto.title;
    movie.writer = dto.writer;
    movie.year = dto.year;
    movie.released = new Date(dto.released);

    const genres = await Promise.all(
      dto.genreIds.map(
        async (id) => await this.genreRepository.findOne({ where: { id } }),
      ),
    );
    console.log('---> genres', genres);

    movie.genre = genres.map((genre) => genre.key).join(',');
    this.movieRepository.save(movie);
  }

  async update(id: number, dto: MoviewDto) {
    const movie = new Movie();
    movie.id = dto.id;
    movie.actors = dto.actors;
    movie.country = dto.country;
    movie.director = dto.director;
    movie.language = dto.language;
    movie.plot = dto.plot;
    movie.poster = dto.poster;
    movie.runtime = dto.runtime;
    movie.title = dto.title;
    movie.writer = dto.writer;
    movie.year = dto.year;
    movie.released = new Date(dto.released);

    const genres = await Promise.all(
      dto.genreIds.map(
        async (id) => await this.genreRepository.findOne({ where: { id } }),
      ),
    );
    console.log('---> genres', genres);
    movie.genre = genres.map((genre) => genre.key).join(',');

    this.movieRepository.save(movie);
  }

  delete(id: number) {
    this.movieRepository.delete({ id });
  }
}
