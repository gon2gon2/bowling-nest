import { IsNotEmpty } from 'class-validator';

export class CreateScoreDto {
  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  when: string;

  @IsNotEmpty()
  place_id: number;

  @IsNotEmpty()
  value: number;
}
