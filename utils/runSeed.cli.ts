import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { Connection, getConnection } from 'typeorm';
import { ISeeder } from './seeder.interface';
import { clear } from 'console';
const fs = require('fs');
const path = require('path');
const seedsFolder = './seeds/';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  try {
    const connection = getConnection();

    const seeders = getDirSeeders();

    await run(seeders, connection);

    app.close();
  } catch (error) {
    console.error('OH NOES!', error);
    app.close();
  }
}

const getDirSeeders = (): ISeeder[] => {
  return fs.readdirSync(seedsFolder).map((file: string) => {
    const fileName: string = path.parse(file).name;
    return require('.' + seedsFolder + fileName)?.default;
  });
};

const run = async (seeders: ISeeder[], connection: Connection) => {
  const seedType = process.argv[2];
  clear();

  switch (seedType) {
    case 'up':
      await runUpSeeders(seeders, connection);
      break;
    case 'down':
      await runDownSeeders(seeders, connection);
      break;
    case 'reset':
      await runDownSeeders(seeders, connection);
      await runUpSeeders(seeders, connection);
      break;
    default:
      console.log(
        `Uh Oh!\n Please choose a valid option: \n up: run the seeders \n down: rollback all seeders \n reset: reset all db seeders`,
      );
      break;
  }
};

const runUpSeeders = async (seeders: ISeeder[], connection: Connection) => {
  console.log('=========== BEGIN SEEDING =============');

  seeders.sort((a, b) => a.timeStamp - b.timeStamp);
  for (const seeder of seeders) {
    const insertNum = await seeder.up(connection);
    console.log(`✅  ${insertNum} ${seeder.name} records created.`);
  }
};

const runDownSeeders = async (seeders: ISeeder[], connection: Connection) => {
  console.log('=========== BEGIN ROLLBACK ============');

  seeders.sort((a, b) => b.timeStamp - a.timeStamp);
  for (const seeder of seeders) {
    await seeder.down(connection);
    console.log(`🗑  ${seeder.name} rollback complete.`);
  }
};
bootstrap();
