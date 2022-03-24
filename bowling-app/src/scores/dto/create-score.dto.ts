import { IsNotEmpty } from 'class-validator';

export class CreateScoreDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  when: string;

  @IsNotEmpty()
  place_id: string;
}
