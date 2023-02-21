import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ThrottlerModule } from "@nestjs/throttler";
import { SpellsModule } from "src/spells/spells.module";
import { WizardsModule } from "src/wizard/wizard.module";
import { ElixirsModule } from "src/elixirs/elixirs.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),

    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      database: "wizardworld",
      username: "root",
      password: process.env.LOCAL_DATABASE_PASSWORD,
      synchronize: true,
      autoLoadEntities: true,
    }),

    WizardsModule,
    SpellsModule,
    ElixirsModule,
  ],
})
export class AppModule {}
