import { Controller, Get, Post, Body, HttpException } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidayPost } from './models';

@Controller('holidays')
export class HolidaysController {
  constructor(private service: HolidaysService) {}

  @Get()
  async getHolidays() {
    return new Promise(res => {
      setTimeout(() => res(this.service.getAll()), 250);
    });
  }

  @Post()
  async addHoliday(@Body() holiday: HolidayPost) {
    if (holiday.name.toLowerCase() === "president's day") {
      throw new HttpException('Nate hates that holiday.', 400);
    }
    const result = this.service.addOne(holiday);
    return new Promise(res => {
      setTimeout(() => res(result), 3000);
    });
  }
}
