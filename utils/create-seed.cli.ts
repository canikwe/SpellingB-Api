const fs = require('fs');

const seedName = process.argv[2];
const date = Date.now();
const template = `import { getRepository } from 'typeorm';
import { ${seedName} } from 'src/${seedName.toLowerCase()}/entities/${seedName.toLowerCase()}.entity';

/**
 * This file is structured in the way the seeder cli can run seeds (insert records into the database) and revert seeds (remove seeds from the database).
 * It assumes a certain file structure, so please double check imports.
 * @property {string} name - Typically the name of the seeded table. Used to run single seed files. This must match the name on your seed file.
 * @property {number} timeStamp - Needed to run the seeds in order. This must match the timestamp on your seed file.
 * @property {method} up - Logic that inserts records into the database table. Must retrun a Promise of type number.
 * @property {method} down - Logic that removes records from the database table. Returns nothing.
 */
export default {
  name: "${seedName}" /** Do not update */,
  timeStamp: ${date} /** Do not update */,
  up: async (): Promise<number> => {
    /**
     * Hint: start by commenting these lines in.
     */

     /** Get the ${seedName} repository to access Type ORM repository methods on the Entity */
    // const ${seedName.toLowerCase()}Repository = getRepository(${seedName});
    
    /** Adds records to the ${seedName} database table */
    // const result = await ${seedName.toLowerCase()}Repository.insert([]);
    
    /** Return the number of inserted table records */
    // return result.generatedMaps.length;
  },
  down: async (): Promise<void> => {
    /** Removes records from the ${seedName} database table */
    // await getRepository(${seedName}).delete({});
  },
}

`;

fs.writeFile(`seeds/${date}-${seedName}.seeder.ts`, template, (err: Error) => {
  if (err) {
    console.log(err);
  } else {
    console.log('🌱 created seed file');
  }
});
