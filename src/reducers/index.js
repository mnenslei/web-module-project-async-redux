import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from '../actions'

const initialState = {
    prices: {
        bpi: {
            EUR: {
                code: "EUR",
                description: "Euro",
                rate: "36,992.3028",
                rate_float: 36992.3028,
                symbol: "&euro;"
            },
            GBP: {
                code: "GBP",
                description: "British Pound Sterling",
                rate: "30,821.1132",
                rate_float: 30821.1132,
                symbol: "&pound;"
            },
            USD: {
                code: "USD",
                description: "United States Dollar",
                rate: "41,989.9310",
                rate_float: 41989.931,
                symbol: "&#36;"
            }
        }
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                prices: '',
                isFetching: true,
                error: ''
            };
        case FETCH_FAIL:
            return {
                ...state,
                prices: '',
                isFetching: false,
                error: action.payload
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                prices: action.payload,
                isFetching: false,
                error: ''
            };
        default:
            return state;
    }
};