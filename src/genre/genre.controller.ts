import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreDto } from './genre.dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  getRecords() {
    return this.genreService.getAll();
  }

  @Get(':id')
  getRecordById(@Param('id') id: number) {
    return this.genreService.getById(id);
  }

  @Post()
  createRecord(@Body() dto: GenreDto) {
    this.genreService.add(dto);
    return true;
  }

  @Put(':id')
  updateRecord(@Param('id') id: number, @Body() dto: GenreDto) {
    this.genreService.update(id, dto);
    return true;
  }

  @Delete(':id')
  deleteDailyRecord(@Param('id') id: number) {
    this.genreService.delete(id);
    return true;
  }
}
