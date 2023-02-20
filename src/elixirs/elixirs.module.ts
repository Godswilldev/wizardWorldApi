import { Module } from "@nestjs/common";
import { ElixirsService } from "./elixirs.service";
import { ElixirsController } from "./elixirs.controller";

@Module({
  controllers: [ElixirsController],
  providers: [ElixirsService],
})
export class ElixirsModule {}
