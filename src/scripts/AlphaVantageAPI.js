/**
 * This module establishes an API connection with AlphaVantage, and instantiates
 * a class to retrieve the user requested stock information.
 * 
 * The AlphaVantageAPI class takes in a stock symbol as an argument through 
 * its constructor, and defines methods for retrieving the stock information.
 * 
 * @class AlphaVantageAPI
 */

export class AlphaVantageAPI {
    constructor(requestedStock = "IBM") {
        this.requestedStock = requestedStock;
        this.alpha = require('alphavantage')({ key: 'WX5GQNRSWDWX1NZT' });
    }

    /**
     * Retrieves the requested stocks information as a promises, and resolves 
     * the values to a destructured object.
     * 
     * @returns {Promise} Resolved destructured object containing the stocks: 
     * symbol, open, high, low, current price, volume, and previousClose
     */
    async getStockInformation() {
        const data = await this.alpha.data.quote(this.requestedStock);

        const { '01. symbol': symbol, '02. open': open, '03. high': high,
            '04. low': low, '05. price': currentPrice, '06. volume': volume,
            '08. previous close': previousClose } = data['Global Quote'];

        return { symbol, open, high, low, currentPrice, volume, previousClose };
    }

    /**
     * Retrieves the requested stocks company information as a promise, and 
     * resolves the values to a destructured object.
     * 
     * @returns {Promise} Resolved destructured object containing the stocks: 
     * descriptions, PERatio, and EPS.
     */
    async getCompanyInformation() {
        const data = await this.alpha.fundamental.company_overview(this.requestedStock);

        const { 'Description': companyDescription, 'PERatio': PERatio,
            EPS, 'Beta': beta } = data;

        return { companyDescription, PERatio, EPS, beta };
    }
}

export

    // ============================== API Retrieval ==============================
    const alphaVantageAPI = new AlphaVantageAPI();

alphaVantageAPI.getStockInformation()
    .then(({ symbol, open, high, low, currentPrice, volume, previousClose }) => {
        console.log(`Symbol: ${symbol}`);
        console.log(`Open: $${parseFloat(open).toFixed(2)}`);
        console.log(`High: $${parseFloat(high).toFixed(2)}`);
        console.log(`Low: $${parseFloat(low).toFixed(2)}`);
        console.log(`Current Price: $${parseFloat(currentPrice).toFixed(2)}`);
        console.log(`Volume: ${parseFloat(volume).toLocaleString(undefined,
            { groupingSeparator: "'" })}`);
        console.log(`Previous Close: $${parseFloat(previousClose).toFixed(2)}`);
    });

alphaVantageAPI.getCompanyInformation()
    .then(({ companyDescription, PERatio, EPS, beta }) => {
        console.log('\nCompany Description:\n', companyDescription);
        console.log(`\nCompany PE Ratio:`, PERatio,
            'times its earnings per share');
        console.log(`Company EPS: $${parseFloat(EPS).toFixed(2)} per share`);
        console.log(`Beta: ${beta}`);
    });

