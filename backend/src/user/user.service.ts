import { Injectable } from '@nestjs/common';

import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(
    name: string,
    username: string,
    password: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: {
        name,
        username,
        hashedPassword,
      },
    });
  }

  async findUserByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        username,
      },
    });
  }
}
