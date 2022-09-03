import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { MeModule } from './me/me.module';
import { UserModule } from './user/user.module';
import { EventsModule } from './events/events.module';

require('dotenv').config({path: __dirname + '../../.env'});

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.epd8a.mongodb.net/KChat?retryWrites=true&w=majority`),
    DbModule,
    AuthModule,
    MeModule,
    UserModule,
    EventsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
