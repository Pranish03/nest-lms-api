import { AuthService } from './auth.service.js';
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register() {
    return this.authService.registerUser();
  }
}
