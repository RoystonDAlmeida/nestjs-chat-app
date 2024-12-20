// src/user/user.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './user.schema'; // Import the User schema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Registering the User schema
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Export UserService if you want to use it in other modules
})
export class UserModule {}
