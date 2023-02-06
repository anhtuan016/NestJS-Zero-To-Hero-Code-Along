import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MParentCategory } from "./MParentCategory.entity";
import { TRecipe } from "./TRecipe.entity";

@Index("m_category_pkey", ["id"], { unique: true })
@Index("m_category_name_key", ["name"], { unique: true })
@Entity("m_category", { schema: "public" })
export class MCategory {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

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

  @ManyToOne(
    () => MParentCategory,
    (mParentCategory) => mParentCategory.mCategories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "parent", referencedColumnName: "id" }])
  parent: MParentCategory;

  @ManyToMany(() => TRecipe, (tRecipe) => tRecipe.mCategories)
  @JoinTable({
    name: "t_recipe_category",
    joinColumns: [{ name: "category_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "recipe_id", referencedColumnName: "id" }],
    schema: "public",
  })
  tRecipes: TRecipe[];
}
