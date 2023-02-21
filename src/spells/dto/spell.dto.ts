import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNotEmpty, IsString } from "class-validator";
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
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  incantation: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  effect: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  creator: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  canBeVerbal: boolean;

  @ApiProperty({ enum: SpellTypeEnum })
  @IsEnum(SpellTypeEnum)
  type: SpellTypeEnum;

  @ApiProperty({ enum: SpellLightEnum })
  @IsEnum(SpellLightEnum)
  light: SpellLightEnum;
}

export class UpdateSpellDto extends PartialType(CreateSpellDto) {}
