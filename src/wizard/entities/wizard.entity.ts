import BaseModel from "src/entities/baseModel.entity";
import { Spell } from "src/spells/entities/spell.entity";
import { Column, Entity, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Wizard extends BaseModel {
  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  lastname: string;

  @ManyToMany(() => Spell)
  @JoinTable()
  spells: Spell[];
}
