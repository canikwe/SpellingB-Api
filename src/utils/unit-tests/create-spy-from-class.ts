export const createSpyFromClass = <T>(klass: T): Partial<T> => {
  const propNames = Object.getOwnPropertyNames((klass as any).prototype);
  return propNames.reduce((partial: Partial<T>, propName: string) => {
    if (propName !== 'constructor') partial[propName] = jest.fn();
    return partial;
  }, {});
};
