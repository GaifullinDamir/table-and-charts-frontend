import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMoneyTurnover } from "../models";
import { $host } from ".";

type PaginationType = {
    page: number;
    size: number;
}

interface IFetchAllWithPaginationReponse {
    data: IMoneyTurnover[];
}
export const fetchAllMoneyTurnoverPaginated = createAsyncThunk(
    'moneyTurnover/fetchAll',
    async ({page, size}: PaginationType, thunkApi) => {
        try {
            const res = await $host.get<IFetchAllWithPaginationReponse>(`moneyTurnover?_sort=-date&_page=${page}&_per_page=${size}`);
            const moneyTurnoverArray = res.data.data;
            return moneyTurnoverArray;
        } catch (error) {
            return thunkApi.rejectWithValue((error as Error).message);
        }
    }
)

export const fetchMoneyTournoverByDate = createAsyncThunk(
    'moneyTournover/fetchByDate',
    async (date: Date, thunkApi) => {
        try {
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const dateString = `${year}-${month > 9 ? month : '0'+ month}-${day > 9 ? day : '0' + day}`;
            const res = await $host.get<IMoneyTurnover>(`moneyTurnover?date=${dateString}`);
            const moneyTurnover = res.data;
            return moneyTurnover;
        } catch (error) {
            return thunkApi.rejectWithValue((error as Error).message);
        }
    }
)