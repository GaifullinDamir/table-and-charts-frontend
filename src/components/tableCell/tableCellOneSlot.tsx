
type TableCellOneSlotProps = {
    className?: string;
    firstSlot: string;
}

const TableCellOneSlot = ({firstSlot, className = ''}: TableCellOneSlotProps) => {
    return (
        <div className={`table-cell-one-slot ${className}`}>
            <div className="table-cell-one-slot__first-slot">{firstSlot}</div>
        </div>
    );
};

export default TableCellOneSlot;