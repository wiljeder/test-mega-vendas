import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async create(name: string, phone: string, groupId: number): Promise<any> {
    return this.prisma.contacts.create({
      data: {
        name,
        phone,
        groupId,
      },
    });
  }

  async createMany(
    contacts: { name: string; phone: string; groupId: number }[],
  ) {
    return this.prisma.contacts.createManyAndReturn({
      data: contacts,
    });
  }

  async delete(id: number) {
    return this.prisma.contacts.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
