import { Injectable } from '@nestjs/common';
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
}
