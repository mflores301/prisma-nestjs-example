export interface Delegate {
  create(data: unknown): Promise<unknown>;
  delete(data: unknown): Promise<unknown>;
  findMany(data: unknown): Promise<unknown>;
  findUnique(data: unknown): Promise<unknown>;
  update(data: unknown): Promise<unknown>;
}
