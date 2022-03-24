import { Injectable, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entitiy';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies; // 실제로는 DB에 대한 쿼리
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies.filter((movie) => movie.id !== +id);
    // 리턴이 없어도 된다, why? ->
  }

  createMovie(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
    return 'create OK';
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...Movie, ...updateData });
    // 문제: 데이터 유효성 검사가 없다. -> DTO
  }
}
