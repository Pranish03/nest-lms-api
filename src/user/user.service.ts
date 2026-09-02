import { RegisterDto } from './../auth/dto/register.dto.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser(registerDto: RegisterDto) {
    return { message: 'User created!' };
  }
}
