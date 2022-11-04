export interface CrudMapType {
  //Args Types
  create: unknown;
  delete: unknown;
  findMany: unknown;
  findUnique: unknown;
  update: unknown;

  //Return Types
  createReturn: unknown;
  deleteReturn: unknown;
  findManyReturn: unknown;
  findUniqueReturn: unknown;
  updateReturn: unknown;
}
