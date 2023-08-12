import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TheaterService } from './theater.service';
import { TheaterDto } from './theater.dto';

@Controller('theater')
export class TheaterController {
  constructor(private readonly theaterService: TheaterService) {}

  @Get()
  getRecords() {
    return this.theaterService.getAll();
  }

  @Get(':id')
  getRecordById(@Param('id') id: number) {
    return this.theaterService.getById(id);
  }

  @Post()
  createRecord(@Body() dto: TheaterDto) {
    this.theaterService.add(dto);
    return true;
  }

  @Put(':id')
  updateRecord(@Param('id') id: number, @Body() dto: TheaterDto) {
    this.theaterService.update(id, dto);
    return true;
  }

  @Delete(':id')
  deleteDailyRecord(@Param('id') id: number) {
    this.theaterService.delete(id);
    return true;
  }
}
