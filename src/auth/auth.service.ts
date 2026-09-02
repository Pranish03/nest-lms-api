import { RegisterDto } from './dto/register.dto.js';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registerUser(registerDto: RegisterDto) {
    console.log(registerDto);

    const hash = await bcrypt.hash(registerDto.password, 10);

    return this.userService.createUser({ ...registerDto, password: hash });
  }
}
