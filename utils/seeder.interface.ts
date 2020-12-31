import { Connection } from 'typeorm';

export interface ISeeder {
  name: string;
  timeStamp: number;
  up: (connection: Connection) => Promise<number>;
  down: (connection: Connection) => Promise<void>;
}
