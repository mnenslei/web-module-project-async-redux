import axios from "axios";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';


export const getChart = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(resp => {
        dispatch(fetchSuccess(resp.data));
    })
    .catch(err => {
        dispatch(fetchFail(err));
    })
}

export const fetchStart = () => {
    return({type:FETCH_START});
}

export const fetchSuccess = (chart) => {
    return({type:FETCH_SUCCESS, payload: chart});
}

export const fetchFail = (errorMessage) => {
    return({type:FETCH_FAIL, payload: errorMessage});
}