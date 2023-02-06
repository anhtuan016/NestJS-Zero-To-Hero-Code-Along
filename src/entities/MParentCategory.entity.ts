import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MCategory } from "./MCategory.entity";

@Index("m_parent_category_pkey", ["id"], { unique: true })
@Index("m_parent_category_name_key", ["name"], { unique: true })
@Entity("m_parent_category", { schema: "public" })
export class MParentCategory {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 100 })
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

  @OneToMany(() => MCategory, (mCategory) => mCategory.parent)
  mCategories: MCategory[];
}
