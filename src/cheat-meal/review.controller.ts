import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from './review.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  getRecords() {
    return this.reviewService.getAll();
  }

  @Get('/by-movie/:id')
  getRecordsByMovie(@Param('id') id: number) {
    return this.reviewService.getByMovieId(id);
  }

  @Get(':id')
  getRecordById(@Param('id') id: number) {
    return this.reviewService.getById(id);
  }

  @Post()
  createRecord(@Body() dto: ReviewDto) {
    this.reviewService.add(dto);
    return true;
  }

  @Put(':id')
  updateRecord(@Param('id') id: number, @Body() dto: ReviewDto) {
    this.reviewService.update(id, dto);
    return true;
  }

  @Delete(':id')
  deleteDailyRecord(@Param('id') id: number) {
    this.reviewService.delete(id);
    return true;
  }
}
