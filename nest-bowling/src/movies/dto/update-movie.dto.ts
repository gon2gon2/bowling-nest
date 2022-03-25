import { IsNumber, IsString } from 'class-validator';
export class UpdateMovieDto {
  // createMovie에 필요한 데이터들 정의
  @IsString()
  readonly title?: string;

  @IsNumber()
  readonly year?: number;

  @IsString({ each: true })
  readonly genres?: string[];
}