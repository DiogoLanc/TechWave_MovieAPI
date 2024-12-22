/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './genre';
import { Movie } from '../movies/movie';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async listGenres(): Promise<Genre[]> {
    return this.genreRepository.find();
  }

  async addGenre(genreData: { name: string }): Promise<Genre> {
    const genre = this.genreRepository.create(genreData);
    return this.genreRepository.save(genre);
  }
  async deleteGenre(id: number): Promise<void> {
    // find the genre by its ID
    const genre = await this.genreRepository.findOne({ where: { id }, relations: ['movies'] });

    if (!genre) {
        throw new NotFoundException(`Genre with ID ${id} not found`);
    }

    // remove the genre from all associated movies
    for (const movie of genre.movies) {
        movie.genres = movie.genres.filter(genreItem => genreItem.id !== genre.id);
        await this.movieRepository.save(movie);
    }

    // delete the genre from the database
    await this.genreRepository.delete(id);
    }
}
