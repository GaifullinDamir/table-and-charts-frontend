
type TableCellTwoSlotProps = {
    className?: string;
    firstSlot: string;
    secondSlot: string;
}

const TableCellTwoSlot = ({firstSlot, secondSlot, className}: TableCellTwoSlotProps) => {
    return (
        <div className={`table-cell-two-slot ${className}`}>
            <div className="table-cell-two-slot__first-slot">{firstSlot}</div>
            <div className="table-cell-two-slot__second-slot">{secondSlot}</div>
        </div>
    );
};

export default TableCellTwoSlot;