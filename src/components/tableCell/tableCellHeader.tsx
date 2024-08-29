
type TableCellHeaderProps = {
    firstSlot: string;
    className?: string;
}

const TableCellHeader = ({firstSlot, className = ''}: TableCellHeaderProps) => {
    return (
        <div className={`table-cell-header ${className}`}>
            <div className="table-cell-header__first-slot">{firstSlot}</div>
        </div>
    );
};

export default TableCellHeader;