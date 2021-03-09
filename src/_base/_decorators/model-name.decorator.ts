import { SetMetadata } from '@nestjs/common';

export const ModelName = (modelName: string) =>
  SetMetadata('modelName', modelName);
