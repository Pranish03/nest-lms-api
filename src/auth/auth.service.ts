import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  registerUser() {
    this.userService.createUser();

    return { message: 'User registered successfully' };
  }
}
