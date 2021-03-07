const fs = require('fs');
import * as _ from 'lodash';
const style = require('ansi-styles');

function createRepository() {
  const path = process.argv[2];
  const splitPath = path.split('/');
  const resource = splitPath.pop();
  const dir = 'src/' + splitPath.join('/');
  const classFilePath = dir + '/' + _.kebabCase(resource) + '.repository.ts';
  const specFilePath =
    dir + '/' + _.kebabCase(resource) + '.repository.spec.ts';

  repoTemplate(fs, classFilePath.toLowerCase(), _.upperFirst(resource));
  createSpecTemplate(
    fs,
    specFilePath.toLowerCase(),
    _.upperFirst(resource),
    _.kebabCase(resource),
  );
}

function repoTemplate(fs: any, filePath: string, resource: string) {
  const template = `import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/_base/services/prisma.service';
import { ${resource} } from '../entities/${_.kebabCase(resource)}.entity';

/**
 * Repository wrapper class for ${resource} Repository. Contains all persistence and
 * logging logic instead of mixing with the service's business logic.
 */
@Injectable()
export class ${resource}Repository{
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}
  
	async find(): Promise<${resource}[]> {
		return /** _baseRepo find goes here */
  }
  async findOne(id: number): Promise<${resource}> {
		return /** _baseRepo fineOneOrFail goes here */
  }
  async create(): Promise<${resource}> {
		return /** _baseRepo save goes here */
	}
  async update(): Promise<${resource}> {
		return /** _baseRepo update goes here */
  }
	
  async delete(id: number): Promise<${resource}> {
		return /** _baseRepo remove goes here. Reminder, .remove does not return the removed record's id! */
	}
}
  `;

  fs.writeFile(filePath, template, (err: Error) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        `✨ created new repository file >> ${style.green.open}${filePath}${style.green.close}`,
      );
    }
  });
}

function createSpecTemplate(
  fs: any,
  filePath: string,
  resource: string,
  resourcePath: string,
) {
  const template = `import { Test, TestingModule } from '@nestjs/testing';
import { ${resource}Repository } from './${resourcePath}.repository';

describe('${resource}Repository', () => {
  let repository: ${resource}Repository
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ ${resource}Repository ],
    }).compile();
    repository = module.get(${resource}Repository);
  });
  
  describe('Initialization', () => {
    it('should be defined', () => {
      expect(repository).toBeDefined();
    });
  });
});
`;

  fs.writeFile(filePath, template, (err: Error) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        `🧪 created new spec file >> ${style.green.open}${filePath}${style.green.close}`,
      );
    }
  });
}

createRepository();
