import { Injectable } from '@nestjs/common';
import { CrudMapType } from './interfaces/crud-map-type.interface';
import { Delegate } from './interfaces/delegate.interface';

@Injectable()
export abstract class RepositoryService<
  D extends Delegate,
  T extends CrudMapType,
> {
  constructor(protected delegate: D) {}

  public getDelegate(): D {
    return this.delegate;
  }

  public async create(args: T['create']): Promise<T['createReturn']> {
    return this.delegate.create(args);
  }

  public async delete(args: T['delete']): Promise<T['deleteReturn']> {
    return this.delegate.delete(args);
  }

  public async findMany(args: T['findMany']): Promise<T['findManyReturn']> {
    return this.delegate.findMany(args);
  }

  public async findUnique(
    args: T['findUnique'],
  ): Promise<T['findUniqueReturn']> {
    return this.delegate.findUnique(args);
  }

  public async update(args: T['update']): Promise<T['updateReturn']> {
    return this.delegate.update(args);
  }
}
