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
} from '@nestjs/common';
import { ValidationTypes } from 'class-validator';
import { CreateScoreDto } from './dto/create-score.dto';
import { ScoreStatusValidationPipe } from './pipes/score-statue-validation.pipe';
import { Score, ScoreStatus } from './score.model';
import { ScoresService } from './scores.service';

@Controller('scores')
export class ScoresController {
  // 이제 여기서 CRUD 작업하면 됨
  constructor(private scoresService: ScoresService) {}

  @Get('/')
  getAllScores(): Score[] {
    return this.scoresService.getAllScores();
  }

  @Post('/')
  @UsePipes(ValidationTypes)
  createScore(@Body('') createScoreDto: CreateScoreDto): Score {
    return this.scoresService.createScore(createScoreDto);
  }

  @Get('/:user_id')
  getScoreByUserId(@Param('user_id') user_id: string): Score {
    return this.scoresService.getScoreByUserId(user_id);
  }

  @Delete('/:id')
  deleteScore(@Param('id') id: string) {
    this.scoresService.deleteScore(id);
    return `Delete ${id}`;
  }

  @Patch('/:id/status')
  updateScoreStatus(
    @Param('id') id: string,
    @Body('status', ScoreStatusValidationPipe) status: ScoreStatus,
  ) {
    return this.scoresService.updateScoreStatus(id, status);
  }
}
