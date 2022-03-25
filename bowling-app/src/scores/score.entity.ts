import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Score extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  user_id: number;

  @Column({ type: 'date' })
  when: string;

  @Column('int')
  place_id: number;

  @Column('int')
  value: number;
}
