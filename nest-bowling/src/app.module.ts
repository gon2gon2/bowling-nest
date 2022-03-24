import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { GamesModule } from './games/games.module';

@Module({
  imports: [GamesModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
