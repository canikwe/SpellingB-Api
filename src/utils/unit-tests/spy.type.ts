export type Spy<T> = {
  [P in keyof T]: jest.Mock<any, any>;
};
