import { Module } from '@nestjs/common';
import { TheaterController } from './theater.controller';
import { TheaterService } from './theater.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theater } from './theater.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Theater])],
  controllers: [TheaterController],
  providers: [TheaterService],
})
export class TheaterModule {}
