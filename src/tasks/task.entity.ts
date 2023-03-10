import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./task-status.enum";
@Entity('task')
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  status: Status;
}