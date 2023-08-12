import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MoviewDto } from './moview.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getDailyRecords() {
    return this.movieService.getAll();
  }

  @Get(':id')
  getDailyRecordById(@Param('id') id: number) {
    return this.movieService.getById(id);
  }

  @Post()
  createDailyRecord(@Body() dto: MoviewDto) {
    this.movieService.add(dto);
    return true;
  }

  @Put(':id')
  updateDailyRecord(@Param('id') id: number, @Body() dto: MoviewDto) {
    this.movieService.update(id, dto);
    return true;
  }

  @Delete(':id')
  deleteDailyRecord(@Param('id') id: number) {
    this.movieService.delete(id);
    return true;
  }
}
