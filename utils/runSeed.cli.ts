import { NestFactory } from "@nestjs/core";
import { AppModule } from '../src/app.module';
import userSeeds from '../seeds/1609382027049-User'
import { getConnection } from "typeorm";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  try {
    const connection = getConnection()
    const items = await userSeeds.up(connection)
    console.log(`Successfully created ${items} seeds!`)
    app.close()
  } catch (error) {
    console.error('OH NOES!', error)
    app.close()
  }
}
bootstrap();