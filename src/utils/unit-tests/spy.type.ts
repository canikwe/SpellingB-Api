export class Spy<T> {
  [key: string]: jest.Mock<any, any>;
}
