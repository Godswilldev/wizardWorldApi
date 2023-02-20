import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/swagger";
import { SpellLightEnum, SpellTypeEnum } from "src/spells/entities/spell.entity";

export class SpellDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  incantation: string;

  @ApiProperty()
  effect: string;

  @ApiProperty()
  creator: string;

  @ApiProperty()
  canBeVerbal: boolean;

  @ApiProperty({ enum: SpellTypeEnum })
  type: SpellTypeEnum;

  @ApiProperty({ enum: SpellLightEnum })
  light: SpellLightEnum;
}

export class CreateSpellDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  incantation: string;

  @ApiProperty()
  effect: string;

  @ApiProperty()
  creator: string;

  @ApiProperty()
  canBeVerbal: boolean;

  @ApiProperty({ enum: SpellTypeEnum })
  type: SpellTypeEnum;

  @ApiProperty({ enum: SpellLightEnum })
  light: SpellLightEnum;
}

export class UpdateSpellDto extends PartialType(CreateSpellDto) {}
