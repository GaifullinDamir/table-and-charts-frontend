export interface ITableRow {
    indicator: string;
    today: number | string;
    yesterday: {
        value: number | string;
        addition: number;
    };
    currentDayOfTheWeek: {
        value: number | string;
        addition: number;
    };
    chartName: string;
    chartData?: number[];
}