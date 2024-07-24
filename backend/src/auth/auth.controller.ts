import {
  Controller,
  Post,
  Body,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.authService.login(user);
  }

  @Post('register')
  async register(
    @Body() body: { name: string; username: string; password: string },
  ) {
    const existingUser = await this.userService.findUserByUsername(
      body.username,
    );

    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    const user = await this.authService.register(
      body.name,
      body.username,
      body.password,
    );

    return this.authService.login(user);
  }
}
