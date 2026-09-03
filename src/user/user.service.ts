import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from './../auth/dto/register.dto.js';
import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(registerDto: RegisterDto) {
    try {
      return await this.userModel.create({
        fname: registerDto.fname,
        lname: registerDto.lname,
        email: registerDto.email,
        password: registerDto.password,
      });
    } catch (error: unknown) {
      const e = error as { code?: number };

      if (e.code == 11000) {
        throw new ConflictException('Email is already taken');
      }

      throw error;
    }
  }
}
