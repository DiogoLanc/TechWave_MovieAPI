import { Controller, Get, Post, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async listMovies(): Promise<Movie[]> {
    return this.moviesService.listMovies();
  }

  @Post()
  async addMovie(@Body() movieData: Partial<Movie>): Promise<Movie> {
    return this.moviesService.addMovie(movieData);
  }
}
