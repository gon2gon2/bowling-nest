export interface Score {
  id: string; // 고유 식별자
  user_id: string; // 유저 id FK
  place_id: string; // 장소 id
  when: string; // datetime
  status: ScoreStatus;
}

export enum ScoreStatus {
  OFFICIAL = 'OFFICIAL',
  UNOFFICIAL = 'UNOFFICIAL',
}
