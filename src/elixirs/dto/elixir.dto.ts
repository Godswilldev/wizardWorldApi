import { PartialType, ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEnum } from "class-validator";
import { ElixirDifficultyEnum } from "src/elixirs/entities/elixir.entity";

export class CreateElixirDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  effect: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sideEffects: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  characteristics: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  time: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  manufacturer: string;

  @ApiProperty({ enum: ElixirDifficultyEnum })
  @IsEnum(ElixirDifficultyEnum)
  difficulty: ElixirDifficultyEnum;
}

export class ElixirDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  effect: string;

  @ApiProperty()
  sideEffects: string;

  @ApiProperty()
  characteristics: string;

  @ApiProperty()
  time: string;

  @ApiProperty()
  manufacturer: string;

  @ApiProperty({ enum: ElixirDifficultyEnum })
  difficulty: ElixirDifficultyEnum;
}

export class UpdateElixirDto extends PartialType(CreateElixirDto) {}

export class ElixirQueryDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ enum: ElixirDifficultyEnum })
  difficulty: ElixirDifficultyEnum;
}
