/**
 * Class module that declares an interface for interacting, and communicating  with the stock API to retrieve real-time metrics on requested stock symbols that is passed to its methods.
 * 
 * @class AlphaVantageAPI
 * @constructor
 * @throws {Error} - Throws an error if a query does not execute
 */
import AlphaVantage from "alphavantage";

export default class AlphaVantageAPI {

    /**
     * Default constructor that initializes a new instance with the API by providing it with an API key
     * @constructor
     */
    constructor() {
        this.apiInitializer = AlphaVantage({ key: });
    }

    /**
     * Retrieves various performance, and description metrics of the  requested stock, using a destructured promise. 
     * 
     * @param {string} requestedStock - The symbol of the requested stock
     * @returns {Promise<object>} - A promise that resolves to an object 
     * containing the real-time metrics of the stock.
     * 
     * @throws {Error} Throws an error if the API call fails
     */
    async getPerformanceMetrics(requestedStock) {
        try {
            const stockPerformanceMetrics = await this.apiInitializer.data.quote(requestedStock);

            const { '01. symbol': symbol, '02. open': open, '03. high': high,
                '04. low': low, '05. price': currentPrice, '06. volume': volume,
                '08. previous close': previousClose } = stockPerformanceMetrics['Global Quote'];

            return { symbol, open, high, low, currentPrice, volume, previousClose };
        } catch (error) {
            throw new Error(`Failed to retrieve the updated stock metrics  
            for the following stock symbol: ${requestedStock}`)
        }
    }
}