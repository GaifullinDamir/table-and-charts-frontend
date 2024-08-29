import axios from "axios";

export const $host = axios.create({
    baseURL: import.meta.env.VITE_MONEY_TURNOVER_API_URL
});