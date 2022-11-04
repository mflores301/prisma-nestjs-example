import { Prisma, User } from '@prisma/client';
import { CrudMapType } from '../repository/interfaces/crud-map-type.interface';
export class UserMapType implements CrudMapType {
  create: Prisma.UserCreateArgs;
  delete: Prisma.UserDeleteArgs;
  findMany: Prisma.UserFindManyArgs;
  findUnique: Prisma.UserFindUniqueArgs;
  update: Prisma.UserUpdateArgs;

  createReturn: User;
  deleteReturn: User;
  findManyReturn: User[];
  findUniqueReturn: User | null;
  updateReturn: User;
}
