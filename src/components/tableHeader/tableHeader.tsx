import { TableCellHeader } from "../";


const TableHeader = () => {
    return (
        <div className="table-header">
            <TableCellHeader
                firstSlot="Показатель"
                className="table-header__first-cell"/>
            <TableCellHeader
                firstSlot="Текущий день"
                className="table-header__second-cell"/>
            <TableCellHeader
                firstSlot="Вчера"
                className="table-header__third-cell"/>
            <TableCellHeader
                firstSlot="Этот день недели"
                className="table-header__fourth-cell"/>
        </div>
    );
};

export default TableHeader;