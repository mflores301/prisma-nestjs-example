import { Prisma } from '@prisma/client';

export type DelegationTemplate =
  | Prisma.RejectOnNotFound
  | Prisma.RejectPerOperation;
