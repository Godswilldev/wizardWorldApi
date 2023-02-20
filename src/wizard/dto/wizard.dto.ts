import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

import { PartialType } from "@nestjs/mapped-types";

export class CreateWizardDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  lastname: string;
}

export class UpdateWizardDto extends PartialType(CreateWizardDto) {}

export class WizardDto {
  @ApiProperty({ example: "40d61093-2fcb-424c-be4c-413dcfc519fb" })
  id: string;

  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;
}
