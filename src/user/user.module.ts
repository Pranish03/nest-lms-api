import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';

@Module({
  providers: [UserService],
  exports: [UserModule],
})
export class UserModule {}
