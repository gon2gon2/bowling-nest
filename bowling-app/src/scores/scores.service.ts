import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { map } from 'rxjs';
import { CreateScoreDto } from './dto/create-score.dto';
import { Score } from './score.entity';
import { ScoreRepository } from './score.repository';

@Injectable() // 어디에서도 사용할 수 있게 만들어 줌
export class ScoresService {
  constructor(
    @InjectRepository(ScoreRepository)
    private scoreRepository: ScoreRepository,
  ) {}

  async getAllScores() {
    const userTable = {
      1: 'XX현',
      2: 'XX준',
      3: 'XX곤',
      4: 'XX일',
      5: 'XX석',
    };
    const scoreTable = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
    };

    const all_scores = await this.scoreRepository.find();

    all_scores.map((item) => {
      scoreTable[item.user_id].push(item.value);
    });

    const result = [];

    for (let i = 1; i < 6; i++) {
      result.push({
        userName: userTable[i],
        userScoreList: scoreTable[i],
      });
    }
    return result;
  }

  createScore(createScoreDto: CreateScoreDto): Promise<Score> {
    return this.scoreRepository.createScore(createScoreDto);
  }

  async getScoreById(id): Promise<Score> {
    // id: number해주니까 에러남.
    //Type 'number' has no properties in common with type 'FindOneOptions<Score>'.
    const found = await this.scoreRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find score id: ${id}`);
    }

    return found;
  }

  async deleteScore(id: number): Promise<void> {
    const result = await this.scoreRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id: ${id}`);
    }
  }

  async updateScore(id: number, value: number): Promise<Score> {
    const score = await this.getScoreById(id);
    score.value = value;
    await this.scoreRepository.save(score);

    return score;
  }
}
