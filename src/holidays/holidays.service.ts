import { Injectable } from '@nestjs/common';
import { HolidayResponseItem, HolidayResponse, HolidayPost } from './models';
import * as cuid from 'cuid';
@Injectable()
export class HolidaysService {
  holidays: HolidayResponseItem[] = [
    {
      id: '1',
      name: 'Christmas 2019',
      date: '2019-12-25T00:00:00.000Z',
    },
    {
      id: '2',
      name: "New Year's",
      date: '2020-01-01T00:00:00.000Z',
    },
    {
      id: '3',
      name: 'Labor Day',
      date: '2019-08-01T00:00:00.000Z',
    },
  ];

  getAll() {
    return { holidays: this.holidays } as HolidayResponse;
  }

  addOne(holiday: HolidayPost) {
    const newId = cuid();
    const newHoliday = { ...holiday, id: newId } as HolidayResponseItem;
    this.holidays.push(newHoliday);
    return newHoliday;
  }
}
