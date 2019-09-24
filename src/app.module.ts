import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HolidaysController } from './holidays/holidays.controller';
import { HolidaysService } from './holidays/holidays.service';
import { FriendsController } from './friends/friends.controller';
import { FriendsService } from './friends/friends.service';

@Module({
  imports: [],
  controllers: [AppController, HolidaysController, FriendsController],
  providers: [AppService, HolidaysService, FriendsService],
})
export class AppModule {}
