import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Wizard } from "./entities/wizard.entity";
import { WizardsService } from "./wizard.service";
import { WizardController } from "src/wizard/wizard.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Wizard])],
  controllers: [WizardController],
  providers: [WizardsService],
})
export class WizardsModule {}
