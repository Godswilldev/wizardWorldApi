import { Module } from "@nestjs/common";
import { ElixirsService } from "./elixirs.service";
import { ElixirController } from "./elixirs.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Elixir } from "./entities/elixir.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Elixir])],
  controllers: [ElixirController],
  providers: [ElixirsService],
})
export class ElixirsModule {}
