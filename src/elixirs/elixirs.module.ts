import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Elixir } from "src/elixirs/entities/elixir.entity";
import { ElixirsService } from "src/elixirs/elixirs.service";
import { ElixirController } from "src/elixirs/elixirs.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Elixir])],
  controllers: [ElixirController],
  providers: [ElixirsService],
})
export class ElixirsModule {}
