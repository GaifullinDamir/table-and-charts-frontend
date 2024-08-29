import { IMoneyTurnover, ITableRow } from "../../models";
import { TableHeader, TableRow } from "../";

type TableProps = {
    tableName?: string;
    data: IMoneyTurnover[];
}

const Table = ({data}: TableProps) => {
    
    /**
     * Функция, которая выдает процент роста x1 относительно x2.
     * @param x1 {number} - первое число.
     * @param x2 {number} - второе число.
     * @returns {number}
     */
    const getPercentageOfGrowth = (x1: number, x2: number) => Math.trunc((x1 - x2) / x1 * 100);
    
    /**
     * Функция, которая конвертирует массив данных в данные для создания таблицы.
     * @param data {IMoneyTurnover[]} -  массив данных
     * @returns {ITableRow[]}
     */
    const createRowsDataArray = (data: IMoneyTurnover[]): ITableRow[] => {
        // Названия строк таблицы
        const indicators = {
            revenue: 'Выручка, руб.',
            cash:  'Наличные',
            nonCash: 'Безналичный расчет',
            creditCards: 'Кредитные карты',
            averageCheck: 'Средний чек, руб.',
            averageGuest: 'Средний гость, руб.',
            deletionAfterPayment: 'Удаление из чека (после оплаты), руб.',
            deletionBeforePayment: 'Удаление из чека (до оплаты), руб.',
            numberOfChecks: 'Количество чеков',
            numberOfGuests: 'Количество гостей',
        };

        const rowsData: ITableRow[] = [];

        for (const key in indicators) {
            if (key !== 'id' && key !== 'date') {
                const indicator = indicators[key as keyof typeof indicators];
                const today = data[0][key as keyof typeof indicators];
                const yesterday = {
                    value: data[1][key as keyof typeof indicators],
                    addition: getPercentageOfGrowth(today, data[1][key as keyof typeof indicators])
                };
                const currentDayOfTheWeek = {
                    value: data[7][key as keyof typeof indicators],
                    addition: getPercentageOfGrowth(today, data[7][key as keyof typeof indicators])
                };
                const chartData = data.map((item) => {
                    return item[key as keyof typeof indicators];
                })
                rowsData.push(
                    {
                        indicator,
                        today,
                        yesterday,
                        currentDayOfTheWeek,
                        chartName: indicators[key as keyof typeof indicators],
                        chartData: chartData.slice(0, 8)
                    }
                );
            }
        }
        return rowsData;
    };

    /**
     * Функция, которая создает массив элементов строк таблицы на основе массива данных для строк таблицы.
     * @param rowsData {ITableRow[]} -  массив данных для строк таблицы
     * @returns {JSX.Element[]}
     */
    const createRowsElements = (rowsData: ITableRow[]): JSX.Element[] => {
        const rows = rowsData.map(rowData => {
            return <>
                <TableRow
                key={rowData.indicator}
                indicator={rowData.indicator}
                today={rowData.today}
                yesterday={rowData.yesterday}
                currentDayOfTheWeek={rowData.currentDayOfTheWeek}
                chartName={rowData.chartName}
                chartData={rowData.chartData}
                />
                
            </>
        })
        return rows
    };

    let tableRows: JSX.Element[] = [];
    const tableRowsData = createRowsDataArray(data);
    tableRows = createRowsElements(tableRowsData);

    return (
        <div className="table">
            <TableHeader/>
            {tableRows}
        </div>
    );
};

export default Table;