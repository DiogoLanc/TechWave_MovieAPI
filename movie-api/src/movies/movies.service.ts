import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async listMovies(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async addMovie(movieData: Partial<Movie>): Promise<Movie> {
    const movie = this.movieRepository.create(movieData);
    return this.movieRepository.save(movie);
  }
}
