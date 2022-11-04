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

  public async aggregate(data: T['aggregate']): Promise<T['aggregateReturn']> {
    return this.delegate.aggregate(data);
  }

  public async count(data: T['count']): Promise<T['countReturn']> {
    return this.delegate.count(data);
  }

  public async create(data: T['create']): Promise<T['createReturn']> {
    return this.delegate.create(data);
  }

  public async delete(data: T['delete']): Promise<T['deleteReturn']> {
    return this.delegate.delete(data);
  }

  public async deleteMany(
    data: T['deleteMany'],
  ): Promise<T['deleteManyReturn']> {
    return this.delegate.deleteMany(data);
  }

  public async findFirst(data: T['findFirst']): Promise<T['findFirstReturn']> {
    return this.delegate.findFirst(data);
  }

  public async findMany(data: T['findMany']): Promise<T['findManyReturn']> {
    return this.delegate.findMany(data);
  }

  public async findUnique(
    data: T['findUnique'],
  ): Promise<T['findUniqueReturn']> {
    return this.delegate.findUnique(data);
  }

  public async update(data: T['update']): Promise<T['updateReturn']> {
    return this.delegate.update(data);
  }

  public async updateMany(
    data: T['updateMany'],
  ): Promise<T['updateManyReturn']> {
    return this.delegate.updateMany(data);
  }

  public async upsert(data: T['upsert']): Promise<T['upsertReturn']> {
    return this.delegate.upsert(data);
  }
}
