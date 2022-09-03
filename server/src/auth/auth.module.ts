import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {User, UserSchema} from '../db/schemas/user.schema';
import {DbModule} from '../db/db.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    DbModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
