import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import userSeeds from '../seeds/1609382027049-User';
import { Connection, getConnection } from 'typeorm';
const fs = require('fs');
const path = require('path');
const seedsFolder = './seeds/';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  try {
    const connection = getConnection();

    await run(connection);

    app.close();
  } catch (error) {
    console.error('OH NOES!', error);
    app.close();
  }
}

const run = async (connection: Connection) => {
  const fileNames = fs.readdirSync(seedsFolder);

  for (const file of fileNames) {
    const fileName: string = path.parse(file).name;
    const seeder = require('.' + seedsFolder + fileName)?.default;
    await runUpSeeders(seeder, connection);
  }
};

const runUpSeeders = async (seeder, connection: Connection) => {
  const insertNum = await seeder.up(connection);
  console.log(`✅ Successfully inserted ${insertNum} seeds.`);
};
bootstrap();
