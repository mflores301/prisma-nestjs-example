import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { DelegationTemplate } from 'src/repository/interfaces/delegation.interface';
import { RepositoryService } from 'src/repository/repository.service';
import { UserMapType } from './user-map-type.interface';

@Injectable()
export class UserService extends RepositoryService<
  Prisma.UserDelegate<DelegationTemplate>,
  UserMapType
> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.user);
  }
}
