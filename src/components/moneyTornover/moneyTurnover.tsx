import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchAllMoneyTurnoverPaginated } from "../../http/moneyTurnoverApi";
import { Table } from "../table";

const MoneyTurnover = () => {
    const {
        moneyTurnoverArray,
        moneyTurnoverArrayError,
        moneyTurnoverArrayIsLoading
    } = useAppSelector(state => state.moneyTurnoverReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllMoneyTurnoverPaginated({page: 1, size: 8}));
    }, []);

    return (
        <div className="money-turnover">
            {moneyTurnoverArrayIsLoading && <div className="label-info">Данные в загрузке</div>}
            {moneyTurnoverArrayError && <div className="label-info">Ошибка загрузки</div>}
            {!moneyTurnoverArrayIsLoading && !moneyTurnoverArrayError && moneyTurnoverArray.length && <Table data={moneyTurnoverArray}/>}
        </div>
    );
};

export default MoneyTurnover;