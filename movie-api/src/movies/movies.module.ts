import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie';
import { Genre } from '../genres/genre';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, Genre])], // Register Movie entity here
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
