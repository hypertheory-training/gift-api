import { Controller, Get } from '@nestjs/common';
import { HolidaysService } from './holidays.service';

@Controller('holidays')
export class HolidaysController {

    constructor(private service: HolidaysService) { }

    @Get()
    async getHolidays() {
        return new Promise((res) => {
            setTimeout(() => res(this.service.getAll()), 250);
        });

    }
}
