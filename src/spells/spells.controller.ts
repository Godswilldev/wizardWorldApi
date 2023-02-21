import { Spell } from "src/spells/entities/spell.entity";
import { SpellsService } from "src/spells/spells.service";
import { StandardResponse } from "src/utils/responseManager.utils";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CreateSpellDto, SpellDto, UpdateSpellDto } from "src/spells/dto/spell.dto";
import {
  Get,
  Body,
  Post,
  Patch,
  Query,
  Param,
  Delete,
  HttpCode,
  Controller,
  ParseUUIDPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from "@nestjs/common";

@Controller("spell")
@ApiTags("Spells")
@UseInterceptors(ClassSerializerInterceptor)
export class SpellController {
  constructor(private readonly spellsService: SpellsService) {}

  @Get()
  @ApiOkResponse({ description: "Spells retrieved successfully", type: [SpellDto] })
  async findAll(@Query("name") name: string): Promise<StandardResponse<Spell[]>> {
    return await this.spellsService.findAll(name);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    description: "Spell created successfully",
    type: StandardResponse<SpellDto>,
  })
  async create(@Body() createSpell: CreateSpellDto): Promise<StandardResponse<SpellDto>> {
    return await this.spellsService.create(createSpell);
  }

  @Get(":id")
  @ApiOkResponse({
    description: "Spell retrieved successfully",
    type: StandardResponse<SpellDto>,
  })
  async findOne(@Param("id", ParseUUIDPipe) id: string): Promise<StandardResponse<SpellDto>> {
    return await this.spellsService.findOne(id);
  }

  @Patch(":id")
  @ApiOkResponse({ description: "Spell Updated successfully", type: StandardResponse<SpellDto> })
  update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateSpellDto: UpdateSpellDto,
  ): Promise<StandardResponse<Spell>> {
    return this.spellsService.update(id, updateSpellDto);
  }

  @Delete(":id")
  @ApiOkResponse({ description: "Spell deleted successfully", type: StandardResponse<null> })
  remove(@Param("id", ParseUUIDPipe) id: string): Promise<StandardResponse<null>> {
    return this.spellsService.remove(id);
  }
}
