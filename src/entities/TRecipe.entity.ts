import {
  Column,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TIngredient } from "./TIngredient.entity";
import { MCategory } from "./MCategory.entity";
import { TStep } from "./TStep.entity";

@Index("t_recipe_pkey", ["id"], { unique: true })
@Index("recipe_name_unique", ["recipeName"], { unique: true })
@Index("t_recipe_recipe_name_idx", ["recipeName"], {})
@Entity("t_recipe", { schema: "public" })
export class TRecipe {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "recipe_name", nullable: true })
  recipeName: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("character varying", { name: "image", nullable: true })
  image: string | null;

  @Column("integer", { name: "serve_size", nullable: true })
  serveSize: number | null;

  @Column("integer", { name: "category_id", nullable: true })
  categoryId: number | null;

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

  @OneToMany(() => TIngredient, (tIngredient) => tIngredient.recipe)
  tIngredients: TIngredient[];

  @ManyToMany(() => MCategory, (mCategory) => mCategory.tRecipes)
  mCategories: MCategory[];

  @OneToMany(() => TStep, (tStep) => tStep.recipe)
  tSteps: TStep[];
}
