import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUserByUsername(username);
    if (user && (await bcrypt.compare(password, user.hashedPassword))) {
      const { hashedPassword, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, username: user.username, sub: user.id };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(name: string, username: string, password: string) {
    return this.userService.createUser(name, username, password);
  }
}
