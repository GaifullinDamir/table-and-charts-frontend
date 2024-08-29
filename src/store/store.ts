import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moneyTurnoverReducer } from "../components/moneyTornover";

const rootReducer = combineReducers({
    moneyTurnoverReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];