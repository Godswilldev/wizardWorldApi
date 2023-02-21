import { StandardResponse } from "src/utils/responseManager.utils";
import {
  ApiTags,
  ApiBody,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
} from "@nestjs/swagger";
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
import { ElixirsService } from "./elixirs.service";
import { Elixir } from "./entities/elixir.entity";
import { CreateElixirDto, ElixirDto, ElixirQueryDto, UpdateElixirDto } from "./dto/elixir.dto";

@Controller("elixir")
@ApiTags("Elixirs")
@UseInterceptors(ClassSerializerInterceptor)
export class ElixirController {
  constructor(private readonly elixirService: ElixirsService) {}

  @Get()
  @ApiOkResponse({ description: "Elixirs retrieved successfully", type: ElixirDto })
  async findAll(@Query() query: ElixirQueryDto): Promise<StandardResponse<Elixir[]>> {
    return await this.elixirService.findAll(query);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    description: "Elixir created successfully",
    type: StandardResponse<ElixirDto>,
  })
  async create(@Body() createElixir: CreateElixirDto): Promise<StandardResponse<ElixirDto>> {
    return await this.elixirService.create(createElixir);
  }

  @Get(":id")
  @ApiOkResponse({
    description: "Elixir retrieved successfully",
    type: StandardResponse<ElixirDto>,
  })
  async findOne(@Param("id", ParseUUIDPipe) id: string): Promise<StandardResponse<ElixirDto>> {
    return await this.elixirService.findOne(id);
  }

  @Patch(":id")
  @ApiOkResponse({ description: "Elixir Updated successfully", type: StandardResponse<ElixirDto> })
  update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateElixirDto: UpdateElixirDto,
  ): Promise<StandardResponse<Elixir>> {
    return this.elixirService.update(id, updateElixirDto);
  }

  @Delete(":id")
  @ApiNoContentResponse({
    description: "Elixir deleted successfully",
    type: StandardResponse<null>,
  })
  remove(@Param("id", ParseUUIDPipe) id: string): Promise<StandardResponse<null>> {
    return this.elixirService.remove(id);
  }
}
