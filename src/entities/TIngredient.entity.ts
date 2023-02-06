import { Exclude } from "class-transformer";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TRecipe } from "./TRecipe.entity";

@Index("t_ingredient_pkey", ["id"], { unique: true })
@Entity("t_ingredient", { schema: "public" })
export class TIngredient{
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "amount", nullable: true })
  amount: string | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  @Exclude()
  createdAt: Date | null;

  @Column("integer", { name: "created_by", nullable: true })
  @Exclude()
  createdBy: number | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  @Exclude()
  updatedAt: Date | null;

  @Column("integer", { name: "updated_by", nullable: true })
  @Exclude()
  updatedBy: number | null;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @ManyToOne(() => TRecipe, (tRecipe) => tRecipe.tIngredients, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "recipe_id", referencedColumnName: "id" }])
  recipe: TRecipe;
}
