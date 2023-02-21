import * as fs from "fs";
import helmet from "helmet";
import * as morgan from "morgan";
import { AppModule } from "src/app.module";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe, INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { GlobalErrorHandler } from "src/utils/all-exception-filter";

const bootstrap = async () => {
  const app = await NestFactory.create<INestApplication>(AppModule);

  app.use(morgan("dev")); //change to combined in production
  app.enableCors({ credentials: true, origin: ["http://localhost:3000"] });
  app.setGlobalPrefix("api/v1");
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle("Wizard World API")
    .setDescription("Otugoh Backend Developer Challenge")
    .setVersion("1.0")
    .addBearerAuth()
    .addServer("http://localhost:8989")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/", app, document);
  fs.writeFileSync("./swagger-documentation.json", JSON.stringify(document));

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalFilters(new GlobalErrorHandler());
  await app.listen(8989);
};

bootstrap();
