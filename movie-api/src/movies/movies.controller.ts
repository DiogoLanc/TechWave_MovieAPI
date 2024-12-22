/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
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

  // update details of a movie
  @Put(':id') // Route: PUT /movies/:id
  async updateMovie(@Param('id') id: number, @Body() movieData: Partial<Movie>) {
    return this.moviesService.updateMovie(id, movieData);
  }

  // delete a movie from the database
  @Delete(':id') // Route: DELETE /movies/:id
  async deleteMovie(@Param('id') id: number) {
    return this.moviesService.deleteMovie(id);
  }
}
