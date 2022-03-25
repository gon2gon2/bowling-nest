import { EntityRepository, Repository } from 'typeorm';
import { CreateScoreDto } from './dto/create-score.dto';
import { Score } from './score.entity';

@EntityRepository(Score)
export class ScoreRepository extends Repository<Score> {
  async createScore(createScoreDto: CreateScoreDto): Promise<Score> {
    const { user_id, when, place_id, value } = createScoreDto;
    const score = this.create();
    score.user_id = user_id;
    score.when = when;
    score.place_id = place_id;
    score.value = value;
    await this.save(score);
    return score;
  }
}
