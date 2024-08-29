
/**
 * Данные о денежном обороте за один день.
 */
export interface IMoneyTurnover {
    id: string;
    revenue: number;
    cash: number;
    nonCash: number;
    creditCards: number;
    averageCheck: number;
    averageGuest: number;
    deletionAfterPayment: number;
    deletionBeforePayment: number;
    numberOfChecks: number;
    numberOfGuests: number;
    date: Date;
}