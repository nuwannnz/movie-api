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
        genre: true,
        reviews: true,
      },
    });
  }

  getAll(): Promise<Movie[]> {
    return this.movieRepository.find({
      relations: {
        genre: true,
        reviews: true,
      },
    });
  }

  async add(dto: MoviewDto) {
    const movie = new Movie();
    movie.released = new Date(dto.released);

    const genres = await Promise.all(
      dto.genreIds.map(
        async (id) => await this.genreRepository.findOne({ where: { id } }),
      ),
    );
    movie.genre = genres;
    this.movieRepository.insert(movie);
  }

  async update(id: number, dto: MoviewDto) {
    const movie = new Movie();
    movie.id = dto.id;
    movie.released = new Date(dto.released);

    const genres = await Promise.all(
      dto.genreIds.map(
        async (id) => await this.genreRepository.findOne({ where: { id } }),
      ),
    );
    movie.genre = genres;

    this.movieRepository.update({ id }, movie);
  }

  delete(id: number) {
    this.movieRepository.delete({ id });
  }
}
