import { Repository, Like } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Guard } from "src/utils/guard.utils";
import { InjectRepository } from "@nestjs/typeorm";
import { Spell } from "src/spells/entities/spell.entity";
import { Wizard } from "src/wizard/entities/wizard.entity";
import { CreateWizardDto } from "src/wizard/dto/wizard.dto";
import { QueryDto, paginateResponse } from "src/utils/pagination.utils";
import { AssignSpellToWizardDto, UpdateWizardDto } from "src/wizard/dto/wizard.dto";
import { ResponseManager, StandardResponse } from "src/utils/responseManager.utils";

@Injectable()
export class WizardsService {
  constructor(
    @InjectRepository(Wizard) private readonly wizardRepository: Repository<Wizard>,
    @InjectRepository(Spell) private readonly spellsRepository: Repository<Spell>,
  ) {}

  async findAll(query: QueryDto): Promise<StandardResponse<Wizard[]>> {
    const limit = query.limit || 10;
    const page = query.page || 1;
    const skip = (page - 1) * limit;
    const search = query.search || "";

    const data = await this.wizardRepository.findAndCount({
      where: [{ firstname: Like(`%${search}%`), lastname: Like(`%${search}%`) }],
      take: limit,
      skip: skip,
    });

    return ResponseManager.StandardResponse({
      code: 200,
      message: "Wizards retrieved successfully",
      ...paginateResponse(data, page, limit),
    });
  }

  async create(wizard: CreateWizardDto): Promise<StandardResponse<Wizard>> {
    const newWizard = this.wizardRepository.create(wizard);

    await newWizard.save();

    return ResponseManager.StandardResponse({
      status: "success",
      code: 201,
      message: "Wizards created successfully",
      data: newWizard,
    });
  }

  async assign(wizard_id: string, spell_id: string): Promise<StandardResponse<Wizard>> {
    const wizard = await this.wizardRepository.findOne({
      where: { id: wizard_id },
      relations: ["spells"],
    });

    Guard.AgainstNotFound(wizard, "wizard");

    const spell = await this.spellsRepository.findOne({ where: { id: spell_id } });

    Guard.AgainstNotFound(spell, "spell");

    const spellAlreadyAssignedToUser = wizard.spells.find((sp: Spell) => sp.id === spell.id);

    if (spellAlreadyAssignedToUser) {
      return ResponseManager.StandardResponse({
        status: "failed",
        code: 409,
        message: "This Spell has Already been Assigned to this wizard",
        data: null,
      });
    }

    wizard.spells.push(spell);

    await wizard.save();

    return ResponseManager.StandardResponse({
      status: "success",
      code: 200,
      message: "Spell Assigned successfully",
      data: wizard,
    });
  }

  async findOne(id: string): Promise<StandardResponse<Wizard>> {
    const wizard = await this.wizardRepository.findOne({ where: { id }, relations: ["spells"] });

    Guard.AgainstNotFound(wizard, "wizard");

    return ResponseManager.StandardResponse({
      status: "success",
      code: 200,
      message: "Wizard retrieved Successfully",
      data: wizard,
    });
  }

  async update(id: string, updateWizardDto: UpdateWizardDto): Promise<StandardResponse<Wizard>> {
    const wizard = await this.wizardRepository.findOneBy({ id });

    Guard.AgainstNotFound(wizard, "wizard");

    await this.wizardRepository.update({ id }, { ...updateWizardDto });

    return ResponseManager.StandardResponse({
      status: "success",
      code: 200,
      message: "Wizard Updated Successfully",
      data: wizard,
    });
  }

  async remove(id: string): Promise<StandardResponse<null>> {
    const wizard = await this.wizardRepository.findOneBy({ id });

    Guard.AgainstNotFound(wizard, "wizard");

    await this.wizardRepository.delete({ id });

    return ResponseManager.StandardResponse({
      status: "success",
      code: 204,
      message: "Wizard deleted Successfully",
      data: null,
    });
  }
}
