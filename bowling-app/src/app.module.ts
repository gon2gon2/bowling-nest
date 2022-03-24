import { Module } from '@nestjs/common';
import { ScoresModule } from './scores/scores.module';

@Module({
  imports: [ScoresModule],
})
export class AppModule {}
