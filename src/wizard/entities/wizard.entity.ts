import { Column, Entity } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import BaseModel from "src/entities/baseModel.entity";

@Entity()
export class Wizard extends BaseModel {
  @ApiProperty()
  @Column({ nullable: false })
  firstname: string;

  @ApiProperty()
  @Column({ nullable: false })
  lastname: string;

  // @ApiProperty()
  // @Column((type) => Spell)
  // spells: Spell[];
}
