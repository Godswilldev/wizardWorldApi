import { Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
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

export class Spell extends BaseModel {
  @ApiProperty()
  @Column({ nullable: false })
  name: string;

  @ApiProperty()
  @Column({ nullable: true })
  incantation: string;

  @ApiProperty()
  @Column({ nullable: true })
  effect: string;

  @ApiProperty()
  @Column({ nullable: false })
  creator: string;

  @ApiProperty()
  @Column({ nullable: false })
  canBeVerbal: boolean;

  @ApiProperty()
  @Column({ nullable: false, enum: SpellTypeEnum })
  type: SpellTypeEnum;

  @ApiProperty()
  @Column({ nullable: false, enum: SpellLightEnum })
  light: SpellLightEnum;
}
