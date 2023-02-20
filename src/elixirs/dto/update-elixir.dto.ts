import { PartialType } from "@nestjs/swagger";
import { CreateElixirDto } from "./create-elixir.dto";

export class UpdateElixirDto extends PartialType(CreateElixirDto) {}
