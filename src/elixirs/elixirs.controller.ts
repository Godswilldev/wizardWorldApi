import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ElixirsService } from "./elixirs.service";
import { CreateElixirDto } from "./dto/create-elixir.dto";
import { UpdateElixirDto } from "./dto/update-elixir.dto";

@Controller("elixirs")
export class ElixirsController {
  constructor(private readonly elixirsService: ElixirsService) {}

  @Post()
  create(@Body() createElixirDto: CreateElixirDto) {
    return this.elixirsService.create(createElixirDto);
  }

  @Get()
  findAll() {
    return this.elixirsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.elixirsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateElixirDto: UpdateElixirDto) {
    return this.elixirsService.update(+id, updateElixirDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.elixirsService.remove(+id);
  }
}