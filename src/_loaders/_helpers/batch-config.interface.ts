export interface BatchConfig<E> {
  ids: number[];
  entity: E;
  foreignKey?: string;
}
