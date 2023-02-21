import { Module } from "@nestjs/common";
import { SpellsService } from "./spells.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Spell } from "./entities/spell.entity";
import { SpellController } from "./spells.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Spell])],
  controllers: [SpellController],
  providers: [SpellsService],
})
export class SpellsModule {}
