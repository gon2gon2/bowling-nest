import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Patch,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { ValidationTypes } from 'class-validator';
import { CreateScoreDto } from './dto/create-score.dto';
import { Score } from './score.entity';
import { ScoresService } from './scores.service';

@Controller('scores')
export class ScoresController {
  // 이제 여기서 CRUD 작업하면 됨
  constructor(private scoresService: ScoresService) {}

  //getAllUsersScore(): Promise<Score[]> {
  @Get()
  getAllUsersScore() {
    return this.scoresService.getAllScores();
  }

  @Post()
  @UsePipes(ValidationTypes)
  createScore(@Body() createScoreDto: CreateScoreDto): Promise<Score> {
    return this.scoresService.createScore(createScoreDto);
  }

  @Get('/:id')
  getScoreById(@Param('id') id: number): Promise<Score> {
    return this.scoresService.getScoreById(id);
  }

  @Delete('/:id')
  deleteScore(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.scoresService.deleteScore(id);
  }

  @Patch('/:id/value')
  updateScore(
    @Param('id', ParseIntPipe) id: number,
    @Body('value') value: number,
  ) {
    return this.scoresService.updateScore(id, value);
  }
}
