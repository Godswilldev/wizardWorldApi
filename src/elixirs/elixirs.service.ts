import { Injectable } from "@nestjs/common";
import { CreateElixirDto } from "./dto/create-elixir.dto";
import { UpdateElixirDto } from "./dto/update-elixir.dto";

@Injectable()
export class ElixirsService {
  create(createElixirDto: CreateElixirDto) {
    return "This action adds a new elixir";
  }

  findAll() {
    return `This action returns all elixirs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} elixir`;
  }

  update(id: number, updateElixirDto: UpdateElixirDto) {
    return `This action updates a #${id} elixir`;
  }

  remove(id: number) {
    return `This action removes a #${id} elixir`;
  }
}
