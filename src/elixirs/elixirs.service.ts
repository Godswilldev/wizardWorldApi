import { Repository, Like } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Guard } from "src/utils/guard.utils";
import { InjectRepository } from "@nestjs/typeorm";
import { Elixir } from "src/elixirs/entities/elixir.entity";
import { ResponseManager, StandardResponse } from "src/utils/responseManager.utils";
import { CreateElixirDto, ElixirQueryDto, UpdateElixirDto } from "src/elixirs/dto/elixir.dto";

@Injectable()
export class ElixirsService {
  constructor(@InjectRepository(Elixir) private readonly elixirRepository: Repository<Elixir>) {}

  async findAll(query: ElixirQueryDto): Promise<StandardResponse<Elixir[]>> {
    const name = query.name || "";
    const difficulty = query.difficulty;

    const data = await this.elixirRepository.find({
      where: { name: Like(`%${name}%`), difficulty },
    });

    return ResponseManager.StandardResponse({
      code: 200,
      message: "Elixirs retrieved successfully",
      data,
      status: "success",
    });
  }

  async create(elixir: CreateElixirDto): Promise<StandardResponse<Elixir>> {
    const newElixir = this.elixirRepository.create(elixir);

    await newElixir.save();

    return ResponseManager.StandardResponse({
      status: "success",
      code: 201,
      message: "Elixirs created successfully",
      data: newElixir,
    });
  }

  async findOne(id: string): Promise<StandardResponse<Elixir>> {
    const elixir = await this.elixirRepository.findOne({ where: { id } });

    Guard.AgainstNotFound(elixir, "elixir");

    return ResponseManager.StandardResponse({
      status: "success",
      code: 200,
      message: "Elixir retrieved Successfully",
      data: elixir,
    });
  }

  async update(id: string, updateElixirDto: UpdateElixirDto): Promise<StandardResponse<Elixir>> {
    const elixir = await this.elixirRepository.findOneBy({ id });

    Guard.AgainstNotFound(elixir, "elixir");

    await this.elixirRepository.update({ id }, { ...updateElixirDto });

    return ResponseManager.StandardResponse({
      status: "success",
      code: 200,
      message: "Elixir Updated Successfully",
      data: elixir,
    });
  }

  async remove(id: string): Promise<StandardResponse<null>> {
    const elixir = await this.elixirRepository.findOneBy({ id });

    Guard.AgainstNotFound(elixir, "elixir");

    await this.elixirRepository.delete({ id });

    return ResponseManager.StandardResponse({
      status: "success",
      code: 204,
      message: "Elixir deleted Successfully",
      data: null,
    });
  }
}
