import { Column, Entity } from "typeorm";
import BaseModel from "src/entities/baseModel.entity";

export enum SpellTypeEnum {
  None = "None",
  Charm = "Charm",
  Conjuration = "Conjuration",
  Spell = "Spell",
  Transfiguration = "Transfiguration",
  HealingSpell = "Healing Spell",
  DarkCharm = "Dark Charm",
  Jinx = "Jinx",
  Curse = "Curse",
  MagicalTransportation = "Magical Transportation",
  Hex = "Hex",
  CounterSpell = "Counter Spell",
  DarkArts = "Dark Arts",
  CounterJinx = "Counter Jinx",
  CounterCharm = "Counter Charm",
  Untransfiguration = "Untransfiguration",
  BindingMagicalContract = "Binding MagicalContract",
  Vanishment = "Vanishment",
}

export enum SpellLightEnum {
  None = "None",
  Blue = "Blue",
  IcyBlue = "IcyBlue",
  Red = "Red",
  Gold = "Gold",
  Purple = "Purple",
  Transparent = "Transparent",
  White = "White",
  Green = "Green",
  Orange = "Orange",
  Yellow = "Yellow",
  BrightBlue = "BrightBlue",
  Pink = "Pink",
  Violet = "Violet",
  BlueishWhite = "BlueishWhite",
  Silver = "Silver",
  Scarlet = "Scarlet",
  Fire = "Fire",
  FieryScarlet = "FieryScarlet",
  Grey = "Grey",
  DarkRed = "DarkRed",
  Turquoise = "Turquoise",
  PsychedelicTransparentWave = "PsychedelicTransparentWave",
  BrightYellow = "BrightYellow",
  BlackSmoke = "BlackSmoke",
}

@Entity()
export class Spell extends BaseModel {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  incantation: string;

  @Column({ nullable: false })
  effect: string;

  @Column({ nullable: false })
  creator: string;

  @Column({ nullable: false })
  canBeVerbal: boolean;

  @Column({ nullable: false, type: "enum", default: SpellTypeEnum.None, enum: SpellTypeEnum })
  type: SpellTypeEnum;

  @Column({ nullable: false, type: "enum", default: SpellLightEnum.Blue, enum: SpellLightEnum })
  light: SpellLightEnum;
}
