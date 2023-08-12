import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './genre.entity';
import { Repository } from 'typeorm';
import { GenreDto } from './genre.dto';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}

  getById(id: number): Promise<Genre> {
    return this.genreRepository.findOne({
      where: { id },
    });
  }

  getAll(): Promise<Genre[]> {
    return this.genreRepository.find();
  }

  async add(dto: GenreDto) {
    const genre = new Genre();
    genre.key = dto.key;
    genre.genre = dto.genre;

    this.genreRepository.insert(genre);
  }

  async update(id: number, dto: GenreDto) {
    const genre = new Genre();

    genre.id = id;
    genre.key = dto.key;
    genre.genre = dto.genre;
    this.genreRepository.update({ id }, genre);
  }

  delete(id: number) {
    this.genreRepository.delete({ id });
  }
}
