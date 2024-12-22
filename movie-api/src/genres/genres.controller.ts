import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from './genre';

@Controller('genres') // base route for genres
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

  // delete a genre
  @Delete(':id') // route -> /genres/:id
  async deleteGenre(@Param('id') id: number): Promise<{ message: string }> {
    await this.genresService.deleteGenre(id);
    return { message: `Genre with ID ${id} successfully deleted` };
  }
}
