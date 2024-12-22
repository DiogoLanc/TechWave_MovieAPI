import { Controller, Get, Post, Body } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from './genre';

@Controller('genres') // route prefix for genres
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  // get all genres
  @Get()
  async listGenres(): Promise<Genre[]> {
    return this.genresService.listGenres();
  }

  // add a new genre
  @Post()
  async addGenre(@Body() genreData: { name: string }): Promise<Genre> {
    return this.genresService.addGenre(genreData);
  }
}
