import AlphaVantage from 'alphavantage';

/**
 * This module establishes an API connection with AlphaVantage, and instantiates
 * a class to retrieve the user requested stock information.
 * 
 * The AlphaVantageAPI class takes in a stock symbol as an argument through its
 * constructor, and defines methods for retrieving the stock information.
 * 
 * @class AlphaVantageAPI
 */
export default class AlphaVantageAPI {

    /**
     * Creates an instance of AlphaVantageAPI
     * 
     * 
     * @param {string} requestedStock The stock symbol to retrieve metrics for
     */
    constructor(requestedStock = 'TSLA') {
        this.requestedStock = requestedStock;
        this.alpha = new AlphaVantage({ key: 'WX5GQNRSWDWX1NZT' });
    }

    /**
     * Retrieves the requested stock's information as a promise, and resolves 
     * the values to a destructured object.
     * 
     * @returns {Promise} Resolved destructured object containing the symbol, 
     * open, high, low, current price, volume, and previous close.
     */
    async getStockInformation() {
        const { 'Global Quote': {
            '01. symbol': symbol,
            '02. open': open,
            '03. high': high,
            '04. low': low,
            '05. price': currentPrice,
            '06. volume': volume,
            '08. previous close': previousClose
        } } = await this.alpha.data.quote(this.requestedStock);
        return { symbol, open, high, low, currentPrice, volume, previousClose };
    }

    /**
     * Retrieves the requested stock's company information as a promise, and 
     * resolves the values to a destructured object.
     * 
     * @returns {Promise} Resolved destructured object containing the company 
     * description, PE Ratio, EPS, and beta.
     */
    async getCompanyInformation() {
        const { 'Description': companyDescription, 'PERatio': PERatio,
            'EPS': EPS, 'Beta': beta } =
            await this.alpha.fundamental.company_overview(this.requestedStock);
        return { companyDescription, PERatio, EPS, beta };
    }
};