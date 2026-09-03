import { RegisterDto } from './dto/register.dto.js';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(registerDto: RegisterDto) {
    const hash = await bcrypt.hash(registerDto.password, 10);

    const user = await this.userService.createUser({
      ...registerDto,
      password: hash,
    });

    const payload = { sub: user._id };
    const token = await this.jwtService.signAsync(payload);

    console.log(token);

    return token;
  }
}
