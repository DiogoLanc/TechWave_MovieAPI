/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.movieRepository.find({ relations: ['genres'] });
  }

  async addMovie(movieData: Partial<Movie>): Promise<Movie> {
    
    const movie = this.movieRepository.create(movieData);
    return this.movieRepository.save(movie);
  }

  async updateMovie(id: number, movieData: Partial<Movie>): Promise<Movie> {

    const movie = await this.movieRepository.findOne({ where: { id } });

    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }

    Object.assign(movie, movieData); // put new data into the existing movie
    return this.movieRepository.save(movie); // save the updated movie
  }

  async deleteMovie(id: number): Promise<void> {

    const result = await this.movieRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
  }

  async searchMovies(title?: string, genre?: string): Promise<Movie[]> {

    const query = this.movieRepository.createQueryBuilder('movie').leftJoinAndSelect('movie.genres', 'genre');

    if (title) {
      query.andWhere('movie.title ILIKE :title', { title: `%${title}%` }); // case-insensitive search
    }

    if (genre) {
      query.andWhere('genre.name = :genre', { genre }); // match genre name
    }

    return query.getMany();
  }
}
