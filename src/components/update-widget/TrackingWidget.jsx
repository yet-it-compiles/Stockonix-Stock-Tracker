/**
 * @file TrackingWidget.jsx
 * 
 * @description Defines the initial appearance of a stock trading widget
 * 
 * @requires React
 * @requires './stock-widget.css'
 */

import React, { useState, useEffect } from 'react';
import AlphaVantageAPI from "../../services/AlphaVantageAPI";
import "./stock-widget.css";

/**
 * Defines the appearance and structure of the stock tracking widget
 * 
 * @returns an interactive stock tracking widget
 */
const TrackingWidget = ({ theRequestedStock, onClick }) => {
    const [isValidStock, setIsValidStock] = useState(null);

    useEffect(() => {
        let fetchedStockData = {};
        let updateWidget = new AlphaVantageAPI();

        updateWidget.getPerformanceMetrics(theRequestedStock).then(
            ({ symbol, open, high, low, currentPrice, volume, previousClose }) => {
                console.log("The symbol fetching for the API is:", theRequestedStock);

                if (theRequestedStock === undefined) {
                    fetchedStockData = {
                        fetchedSymbol: "Invalid ",
                        fetchedOpen: "0.00",
                        fetchedHigh: "0.00",
                        fetchedLow: "0.00",
                        fetchedCurrentPrice: "0.00",
                        fetchedVolume: "0",
                        fetchedPreviousClose: "0.00",
                    }
                } else {
                    fetchedStockData = {
                        fetchedSymbol: symbol,
                        fetchedOpen: parseFloat(open).toFixed(2),
                        fetchedHigh: parseFloat(high).toFixed(2),
                        fetchedLow: parseFloat(low).toFixed(2),
                        fetchedCurrentPrice: parseFloat(currentPrice).toFixed(2),
                        fetchedVolume: parseFloat(volume).toLocaleString(undefined, {
                            groupingSeparator: "'",
                        }),
                        fetchedPreviousClose: parseFloat(previousClose).toFixed(2),
                    };
                }
                if (JSON.stringify(fetchedStockData) !== JSON.stringify(isValidStock)) {
                    setIsValidStock(fetchedStockData);
                }
            }
        )
    }, []);

    return (
        <div className='widget-container' onClick={onClick}>
            {isValidStock && <>
                <div className='wave'></div>
                <div className='wave wave-2'></div>
                <div className='wave wave-3'></div>
                <div>{isValidStock.fetchedSymbol}</div>
                <div>{isValidStock.fetchedCurrentPrice}</div>
            </>}
        </div>
    );
}

export default TrackingWidget;