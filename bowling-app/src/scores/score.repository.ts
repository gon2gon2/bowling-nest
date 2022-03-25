import { Entity, EntityRepository, Repository } from 'typeorm';
import { Score } from './score.entity';

@EntityRepository()
export class ScoreRepository extends Repository<Score> {}
