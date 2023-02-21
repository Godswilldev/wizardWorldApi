import { Repository, Like } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Guard } from "src/utils/guard.utils";
import { InjectRepository } from "@nestjs/typeorm";
import { Spell } from "src/spells/entities/spell.entity";
import { UpdateSpellDto, CreateSpellDto } from "src/spells/dto/spell.dto";
import { ResponseManager, StandardResponse } from "src/utils/responseManager.utils";

@Injectable()
export class SpellsService {
  constructor(@InjectRepository(Spell) private readonly spellsRepository: Repository<Spell>) {}

  async findAll(name: string): Promise<StandardResponse<Spell[]>> {
    const search = name || "";

    const data = await this.spellsRepository.find({
      where: { name: Like(`%${search}%`) },
    });

    return ResponseManager.StandardResponse({
      status: "success",
      code: 200,
      message: "Spells retrieved successfully",
      data,
    });
  }

  async create(spells: CreateSpellDto): Promise<StandardResponse<Spell>> {
    const newSpell = this.spellsRepository.create(spells);

    await newSpell.save();

    return ResponseManager.StandardResponse({
      status: "success",
      code: 201,
      message: "Spell created successfully",
      data: newSpell,
    });
  }

  async findOne(id: string): Promise<StandardResponse<Spell>> {
    const spells = await this.spellsRepository.findOneBy({ id });

    Guard.AgainstNotFound(spells, "spells");

    return ResponseManager.StandardResponse({
      status: "success",
      code: 200,
      message: "Spell retrieved Successfully",
      data: spells,
    });
  }

  async update(id: string, updateSpellDto: UpdateSpellDto): Promise<StandardResponse<Spell>> {
    const spells = await this.spellsRepository.findOneBy({ id });

    Guard.AgainstNotFound(spells, "spells");

    await this.spellsRepository.update({ id }, { ...updateSpellDto });

    return ResponseManager.StandardResponse({
      status: "success",
      code: 200,
      message: "Spell Updated Successfully",
      data: spells,
    });
  }

  async remove(id: string): Promise<StandardResponse<null>> {
    const spells = await this.spellsRepository.findOneBy({ id });

    Guard.AgainstNotFound(spells, "spells");

    await this.spellsRepository.delete({ id });

    return ResponseManager.StandardResponse({
      status: "success",
      code: 204,
      message: "Spell deleted Successfully",
      data: null,
    });
  }
}
