export interface HolidayResponseItem {
    id: string;
    name: string;
    date: string;
}

export interface HolidayResponse {
    holidays: HolidayResponseItem[];
}
