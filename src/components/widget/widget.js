import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./widget.css";
import AlphaVantageAPI from "../../scripts/AlphaVantageAPI";

const WidgetInitialState = ({ widgetId }) => {
  const [newStock, setNewStock] = useState("");
  const [showStockWidget, setStockWidget] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies([`stockSymbol-${widgetId}`]);

  useEffect(() => {
    const stockSymbol = cookies[`stockSymbol-${widgetId}`];
    if (stockSymbol) {
      setNewStock(stockSymbol);
      setStockWidget(true);
    }
  }, [cookies, widgetId]);

  const handleSettingStock = (newStockSymbol) => {
    setNewStock(newStockSymbol);
  };

  const handleStockPrompt = () => {
    const retrieveNewStock = window.prompt("Enter the name of the stock:");

    if (retrieveNewStock) {
      handleSettingStock(retrieveNewStock);
      setStockWidget(true);
      setCookie(`stockSymbol-${widgetId}`, retrieveNewStock, { path: "/" });
    }
  };

  const handleEditWidget = () => {
    removeCookie(`stockSymbol-${widgetId}`, { path: "/" });
    setStockWidget(false);
  };

  return showStockWidget ? (
    <WidgetClicked stockSymbol={newStock} onEditWidget={handleEditWidget} />
  ) : (
    <div className="stock-container-initial" id={`stock-container-initial-${widgetId}`}>
      <h1 id="add-stock" onClick={handleStockPrompt}>+</h1>
    </div>
  );
};

const WidgetClicked = ({ stockSymbol, onEditWidget }) => {
  const [stockData, setStockData] = useState({});
  const [infoData, setStockInfo] = useState({});
  const [newDate, setNewDate] = useState("");

  const ALPHA_VANTAGE_API = new AlphaVantageAPI(stockSymbol);

  const displayTime = () => {
    const LAST_UPDATED = new Date();
    const hours = LAST_UPDATED.getHours();
    const minutes = LAST_UPDATED.getMinutes();
    const AmPM = hours >= 12 ? 'pm' : 'am';
    const currentTime = `${(hours % 12) || 12}:${minutes < 10 ? '0' : ''}${minutes} ${AmPM}`;
    return currentTime;
  }

  useEffect(() => {
    ALPHA_VANTAGE_API
      .getStockInformation()
      .then(
        ({ symbol, open, high, low, currentPrice, volume, previousClose }) => {
          let STOCK_DATA;

          if (symbol === undefined) {
            STOCK_DATA = {
              symbol: "Invalid ",
              currentPrice: "0.00",
              priceChange: "0.00",
              percentChange: "0.00",
            }
            document.getElementById("navigate-to-metrics-button").disabled = true;
          } else {
            const PRICE_CHANGE = parseFloat(currentPrice - previousClose).toFixed(2);

            const PERCENT_CHANGE = parseFloat(
              (PRICE_CHANGE / previousClose) * 100
            ).toFixed(2);

            STOCK_DATA = {
              symbol,
              open: parseFloat(open).toFixed(2),
              high: parseFloat(high).toFixed(2),
              low: parseFloat(low).toFixed(2),
              currentPrice: parseFloat(currentPrice).toFixed(2),
              volume: parseFloat(volume).toLocaleString(undefined, {
                groupingSeparator: "'",
              }),
              previousClose: parseFloat(previousClose).toFixed(2),
              priceChange: PRICE_CHANGE,
              percentChange: PERCENT_CHANGE,
            };
          }
          setStockData(STOCK_DATA);
        }
      )
      .catch((error) => {
        console.error(error);
      });

    ALPHA_VANTAGE_API
      .getCompanyInformation()
      .then(({ companyDescription, PERatio, EPS, beta }) => {
        const info = {
          companyDescription,
          PERatio,
          EPS,
          beta,
        };
        setStockInfo(info);
      })
      .catch((error) => {
        console.error(error);
      });

    setNewDate(displayTime)

    // handles Edit Widget so when user clicks edit button it clears the cookies related to the id and change the state to its initial state.
  },);
  return (
    <div id="stock-container">
      <Link
        to="/"
        id="edit-widget-button"
        className="button"
        onClick={onEditWidget}
      >
        {" "}
        ❌
      </Link>
      <Link
        to="/secondpage"
        state={{ stockData: stockData, infoData: infoData }}
        type="button"
        id="navigate-to-metrics-button"
        className="button"
      >
        📉
      </Link>
      <h1 id="stock-symbol">{stockData.symbol}</h1>
      {stockData.currentPrice && (
        <h2 id="current-price" className="type-number">$
          {stockData.currentPrice}
          <span id="denomination">USD</span>
        </h2>
      )}
      <h3
        id="price-change"
        className="type-number"
        style={{ color: stockData.priceChange < 0 ? "red" : "green" }}
      >
        ${stockData.priceChange}
        <span
          id="percent-change"
          class="type-number"
          style={{ color: stockData.percentChange < 0 ? "red" : "green" }}
        >
          {stockData.percentChange}%
        </span>
      </h3>
      <h4 id="last-updated"> Last Updated: {newDate}</h4>
    </div>
  );
};

export default WidgetInitialState;