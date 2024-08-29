import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchAllMoneyTurnoverPaginated } from "../../http/moneyTurnoverApi";
import { Table } from "../table";
import { Prealoder } from "../preloader";

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
            {moneyTurnoverArrayIsLoading && <Prealoder/>}
            {moneyTurnoverArrayError && <div className="label-info">Ошибка загрузки</div>}
            {!moneyTurnoverArrayIsLoading && !moneyTurnoverArrayError && moneyTurnoverArray.length && <Table data={moneyTurnoverArray}/>}
        </div>
    );
};

export default MoneyTurnover;