import { Entity, Column } from "typeorm";
import BaseModel from "src/entities/baseModel.entity";

export enum ElixirDifficultyEnum {
  Unknown = "Unknown",
  Advanced = "Advanced",
  Moderate = "Moderate",
  Beginner = "Beginner",
  OrdinaryWizardingLevel = "OrdinaryWizardingLevel",
  OneOfAKind = "OneOfAKind",
}

@Entity()
export class Elixir extends BaseModel {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  effect: string;

  @Column({ nullable: true })
  sideEffects: string;

  @Column({ nullable: true })
  characteristics: string;

  @Column({ nullable: true })
  time: string;

  @Column({ nullable: true })
  manufacturer: string;

  @Column({
    nullable: false,
    type: "enum",
    default: ElixirDifficultyEnum.Unknown,
    enum: ElixirDifficultyEnum,
  })
  difficulty: ElixirDifficultyEnum;
}
