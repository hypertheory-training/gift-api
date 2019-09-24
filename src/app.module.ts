import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HolidaysController } from './holidays/holidays.controller';
import { HolidaysService } from './holidays/holidays.service';

@Module({
  imports: [],
  controllers: [AppController, HolidaysController],
  providers: [AppService, HolidaysService],
})
export class AppModule {}
