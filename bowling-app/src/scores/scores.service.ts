import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { ScoreStatus } from './score-status.enum';

@Injectable() // 어디에서도 사용할 수 있게 만들어 줌
export class ScoresService {
  // getAllScores(): Score[] {
  //   return this.scores;
  // }
  // createScore(createScoreDto: CreateScoreDto) {
  //   const { user_id, when, place_id } = createScoreDto;
  //   const score: Score = {
  //     id: String(this.scores.length + 1),
  //     user_id,
  //     when,
  //     place_id,
  //     status: ScoreStatus.UNOFFICIAL,
  //   };
  //   this.scores.push(score);
  //   return score;
  // }
  // getScoreByUserId(user_id: string): Score {
  //   const found = this.scores.find((score) => score.user_id === user_id);
  //   if (!found) {
  //     throw new NotFoundException(`어쩔 티비 없다 티비`);
  //   }
  //   return found;
  // }
  // deleteScore(id: string): void {
  //   const found = this.getScoreByUserId(id);
  //   this.scores.filter((score) => score.id !== found.id);
  // }
  // updateScoreStatus(user_id: string, status: ScoreStatus): Score {
  //   const score = this.getScoreByUserId(user_id);
  //   score.status = status;
  //   return score;
  // }
}
