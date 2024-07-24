import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async findById(id: number) {
    return this.prisma.groups.findUnique({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        Owner: {
          select: {
            id: true,
            name: true,
            username: true,
          },
        },
        GroupsContacts: {
          where: {
            deletedAt: null,
          },
          select: {
            id: true,
            name: true,
            phone: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async findByOwnerId(ownerId: number) {
    return this.prisma.groups.findMany({
      where: {
        ownerId,
        deletedAt: null,
      },
      include: {
        Owner: {
          select: {
            id: true,
            name: true,
            username: true,
          },
        },
        GroupsContacts: {
          where: {
            deletedAt: null,
          },
          select: {
            id: true,
            name: true,
            phone: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async create(name: string, ownerId: number): Promise<any> {
    return this.prisma.groups.create({
      data: {
        name,
        ownerId,
      },
    });
  }

  async rename(id: number, name: string) {
    return this.prisma.groups.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.groups.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
