import { Controller, Get, Post, Body } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidayPost } from './models';

@Controller('holidays')
export class HolidaysController {

    constructor(private service: HolidaysService) { }

    @Get()
    async getHolidays() {
        return new Promise((res) => {
            setTimeout(() => res(this.service.getAll()), 250);
        });

    }

    @Post()
    async addHoliday(@Body() holiday: HolidayPost) {
        const result = this.service.addOne(holiday);
        return new Promise((res) => {
            setTimeout(() => res(result), 3000);
        });
    }
}
