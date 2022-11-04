import { Prisma } from '@prisma/client';
import { DelegationTemplate } from 'src/repository/interfaces/delegation.interface';
import { CrudMapType } from '../repository/interfaces/crud-map-type.interface';
export class UserMapType implements CrudMapType {
  aggregate: Prisma.UserAggregateArgs;
  count: Prisma.UserCountArgs;
  create: Prisma.UserCreateArgs;
  delete: Prisma.UserDeleteArgs;
  deleteMany: Prisma.UserDeleteManyArgs;
  findFirst: Prisma.UserFindFirstArgs;
  findMany: Prisma.UserFindManyArgs;
  findUnique: Prisma.UserFindUniqueArgs;
  update: Prisma.UserUpdateArgs;
  updateMany: Prisma.UserUpdateManyArgs;
  upsert: Prisma.UserUpsertArgs;

  aggregateReturn: ReturnType<
    Prisma.UserDelegate<DelegationTemplate>['aggregate']
  >;
  countReturn: ReturnType<Prisma.UserDelegate<DelegationTemplate>['count']>;
  createReturn: ReturnType<Prisma.UserDelegate<DelegationTemplate>['create']>;
  deleteReturn: ReturnType<Prisma.UserDelegate<DelegationTemplate>['delete']>;
  deleteManyReturn: ReturnType<
    Prisma.UserDelegate<DelegationTemplate>['deleteMany']
  >;
  findFirstReturn: ReturnType<
    Prisma.UserDelegate<DelegationTemplate>['findFirst']
  >;
  findManyReturn: ReturnType<
    Prisma.UserDelegate<DelegationTemplate>['findMany']
  >;
  findUniqueReturn: ReturnType<
    Prisma.UserDelegate<DelegationTemplate>['findUnique']
  >;
  updateReturn: ReturnType<Prisma.UserDelegate<DelegationTemplate>['update']>;
  updateManyReturn: ReturnType<
    Prisma.UserDelegate<DelegationTemplate>['updateMany']
  >;
  upsertReturn: ReturnType<Prisma.UserDelegate<DelegationTemplate>['upsert']>;
}
