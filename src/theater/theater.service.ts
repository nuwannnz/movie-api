import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Theater } from './theater.entity';
import { Repository } from 'typeorm';
import { TheaterDto } from './theater.dto';

@Injectable()
export class TheaterService {
  constructor(
    @InjectRepository(Theater)
    private theaterRepository: Repository<Theater>,
  ) {}

  getById(id: number): Promise<Theater> {
    return this.theaterRepository.findOne({
      where: { id },
    });
  }

  getAll(): Promise<Theater[]> {
    return this.theaterRepository.find();
  }

  async add(dto: TheaterDto) {
    const genre = new Theater();
    genre.name = dto.name;
    genre.description = dto.description;
    genre.latitude = dto.latitude;
    genre.longitude = dto.longitude;

    this.theaterRepository.insert(genre);
  }

  async update(id: number, dto: TheaterDto) {
    const genre = new Theater();

    genre.id = id;
    genre.name = dto.name;
    genre.description = dto.description;
    genre.latitude = dto.latitude;
    genre.longitude = dto.longitude;
    this.theaterRepository.update({ id }, genre);
  }

  delete(id: number) {
    this.theaterRepository.delete({ id });
  }
}
