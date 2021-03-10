import { Spy } from './spy.type';

export const createSpyFromClass = <T>(klass: T): Spy<T> => {
  const propNames = Object.getOwnPropertyNames((klass as any).prototype);
  return propNames.reduce((partial: Spy<T>, propName: string) => {
    if (propName !== 'constructor') partial[propName] = jest.fn();
    return partial;
  }, {} as Spy<T>);
};
