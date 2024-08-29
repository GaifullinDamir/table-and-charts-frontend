/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit/react";
import { IMoneyTurnover } from "../../../models/IMoneyTurnover";
import { fetchAllMoneyTurnoverPaginated, fetchMoneyTournoverByDate } from "../../../http/moneyTurnoverApi";


interface IMoneyTurnoverState {
    moneyTurnoverArray: IMoneyTurnover[];
    moneyTurnoverArrayIsLoading: boolean;
    moneyTurnoverArrayError: string;

    moneyTurnoverByDate: IMoneyTurnover;
    moneyTurnoverByDateIsLoading: boolean;
    moneyTurnoverByDateError: string;
}


const initialState: IMoneyTurnoverState = {
    moneyTurnoverArray: [],
    moneyTurnoverArrayIsLoading: false,
    moneyTurnoverArrayError: '',

    moneyTurnoverByDate: {} as IMoneyTurnover,
    moneyTurnoverByDateIsLoading: false,
    moneyTurnoverByDateError: '',
}

export const moneyTurnoverSlice = createSlice({
    name: 'moneyTurnover',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllMoneyTurnoverPaginated.fulfilled, (state: IMoneyTurnoverState, action) => {
                state.moneyTurnoverArrayIsLoading = false,
                state.moneyTurnoverArrayError = '',
                state.moneyTurnoverArray = action.payload
            })
            .addCase(fetchAllMoneyTurnoverPaginated.pending, (state: IMoneyTurnoverState) => {
                state.moneyTurnoverArrayIsLoading = true,
                state.moneyTurnoverArrayError = ''
            })
            .addCase(fetchAllMoneyTurnoverPaginated.rejected, (state: IMoneyTurnoverState, action) => {
                state.moneyTurnoverArrayIsLoading = false;
                state.moneyTurnoverArrayError = action.payload as string
            })
            .addCase(fetchMoneyTournoverByDate.fulfilled, (state: IMoneyTurnoverState, action) => {
                state.moneyTurnoverByDateIsLoading = false,
                state.moneyTurnoverByDateError = '',
                state.moneyTurnoverByDate = action.payload
            })
            .addCase(fetchMoneyTournoverByDate.pending, (state: IMoneyTurnoverState) => {
                state.moneyTurnoverByDateIsLoading = true,
                state.moneyTurnoverByDateError = ''
            })
            .addCase(fetchMoneyTournoverByDate.rejected, (state: IMoneyTurnoverState, action) => {
                state.moneyTurnoverByDateIsLoading = false;
                state.moneyTurnoverByDateError = action.payload as string
            })
            .addDefaultCase(() => {});
    },
});

export default moneyTurnoverSlice.reducer;