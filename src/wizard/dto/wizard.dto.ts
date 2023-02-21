import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

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

export class AssignSpellToWizardDto {
  @ApiProperty({ example: "40d61093-2fcb-424c-be4c-413dcfc519fb" })
  @IsUUID("4")
  wizard_id: string;

  @ApiProperty({ example: "40d61093-2fcb-424c-be4c-413dcfc519fb" })
  @IsUUID("4")
  spell_id: string;
}
