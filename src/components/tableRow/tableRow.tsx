import { useState } from "react";
import { TableCellOneSlot, TableCellTwoSlot, Highchart } from "../";
import { ITableRow } from "../../models";

const TableRow = ({
    indicator,
    today,
    yesterday,
    currentDayOfTheWeek,
    chartName,
    chartData
    }: ITableRow) => {

    const getColorByPercentage= (percentage: number) => percentage > 0 ? 'success' : percentage < 0 ? 'danger' : 'neutral'; 

    const [isChartVisible, setIsChartVisible] = useState(false);
    console.log(chartName)

    return (
        <>
        <div 
            className='table-row'
            onClick={() => setIsChartVisible(isChartVisible => !isChartVisible)}>
            <TableCellOneSlot
                firstSlot={indicator}
                className="table-row__first-cell"/>
            <TableCellOneSlot
                firstSlot={`${today}`}
                className="table-row__second-cell"/>
            <TableCellTwoSlot
                firstSlot={`${yesterday.value}`}
                secondSlot={`${yesterday.addition}%`}
                className= {`table-row__third-cell table-row-cell_${getColorByPercentage(yesterday.addition)}`}/>
            <TableCellOneSlot
                firstSlot={`${currentDayOfTheWeek.value}`}
                className={`table-row__fourth-cell table-row-cell_${getColorByPercentage(currentDayOfTheWeek.addition)}`}/>
        </div>
        <Highchart data={chartData} isVisible={isChartVisible} text={chartName}/>
        </>
    );
};

export default TableRow;