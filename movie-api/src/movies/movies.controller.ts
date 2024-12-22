import { Controller, Get, Post, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie';

@Controller('movies') // base route
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get() // list all movies
  async listMovies(): Promise<Movie[]> {
    return this.moviesService.listMovies();
  }

  @Post() // add movie to the database
  async addMovie(@Body() movieData: Partial<Movie>): Promise<Movie> {
    return this.moviesService.addMovie(movieData);
  }
}
