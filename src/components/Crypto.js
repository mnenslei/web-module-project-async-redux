import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { getChart } from "../actions";

const Crypto = ({ prices, isFetching, error, dispatch }) => {

    console.log(prices)

    useEffect(()=> {
        dispatch(getChart());
    }, []);

    if (error) {
        return <h3>There might be an error: {error}</h3>
    }

    if (isFetching) {
        return <h3>Just a moment, chart is loading...</h3>
    }

    return(
        <>
        <div>
            <h3>{prices.chartName}</h3>
            <h1>Bitcoin/USD price: {prices.map(price => <div>{price}</div>)} </h1>
        </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        prices: state.prices,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Crypto);