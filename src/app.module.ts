import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ThrottlerModule } from "@nestjs/throttler";
import { SpellsModule } from "./spells/spells.module";
import { WizardsModule } from "src/wizard/wizard.module";
import { Spell } from "src/spells/entities/spell.entity";
import { ElixirsModule } from "./elixirs/elixirs.module";
import { Wizard } from "src/wizard/entities/wizard.entity";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),

    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      database: "wizardworld",
      username: "root",
      password: "Godis-4me",
      // entities: [Wizard, Spell],
      synchronize: true,
      autoLoadEntities: true,
    }),
    WizardsModule,
    SpellsModule,
    ElixirsModule,
  ],
})
export class AppModule {}
