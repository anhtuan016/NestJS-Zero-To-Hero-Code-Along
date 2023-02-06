import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TRecipe } from "./TRecipe.entity";

@Index("t_step_pkey", ["id"], { unique: true })
@Entity("t_step", { schema: "public" })
export class TStep {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "step_no", nullable: true, default: () => "1" })
  stepNo: number | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "image", nullable: true, array: true })
  image: string[] | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("integer", { name: "created_by", nullable: true })
  createdBy: number | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("integer", { name: "updated_by", nullable: true })
  updatedBy: number | null;

  @ManyToOne(() => TRecipe, (tRecipe) => tRecipe.tSteps, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "recipe_id", referencedColumnName: "id" }])
  recipe: TRecipe;
}
