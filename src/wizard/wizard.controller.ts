import { Wizard } from "src/wizard/entities/wizard.entity";
import { WizardsService } from "src/wizard/wizard.service";
import { UpdateWizardDto } from "src/wizard/dto/wizard.dto";
import { QueryDto, Paginate } from "src/utils/pagination.utils";
import { StandardResponse } from "src/utils/responseManager.utils";
import { CreateWizardDto, WizardDto } from "src/wizard/dto/wizard.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
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
  UseInterceptors,
  ClassSerializerInterceptor,
} from "@nestjs/common";

@Controller("wizard")
@ApiTags("Wizards")
@UseInterceptors(ClassSerializerInterceptor)
export class WizardController {
  constructor(private readonly wizardService: WizardsService) {}

  @Get()
  @ApiOkResponse({ description: "Wizards retrieved successfully", type: Paginate })
  async findAll(@Query() query: QueryDto): Promise<StandardResponse<Wizard[]>> {
    console.log(query);
    return await this.wizardService.findAll(query);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    description: "Wizard created successfully",
    type: StandardResponse<WizardDto>,
  })
  async create(@Body() createWizard: CreateWizardDto): Promise<StandardResponse<WizardDto>> {
    return await this.wizardService.create(createWizard);
  }

  @Get(":id")
  @ApiOkResponse({
    description: "Wizard retrieved successfully",
    type: StandardResponse<WizardDto>,
  })
  async findOne(@Param("id") id: string): Promise<StandardResponse<WizardDto>> {
    return await this.wizardService.findOne(id);
  }

  @Patch(":id")
  @ApiOkResponse({ description: "Wizard Updated successfully", type: StandardResponse<WizardDto> })
  update(
    @Param("id") id: string,
    @Body() updateWizardDto: UpdateWizardDto,
  ): Promise<StandardResponse<Wizard>> {
    return this.wizardService.update(id, updateWizardDto);
  }

  @Delete(":id")
  @ApiOkResponse({ description: "Wizard deleted successfully", type: StandardResponse<null> })
  remove(@Param("id") id: string): Promise<StandardResponse<null>> {
    return this.wizardService.remove(id);
  }
}
