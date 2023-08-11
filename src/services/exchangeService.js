const ccxt = require("ccxt");

const getTradableCoins = async () => {
  const exchange = new ccxt.binance();
  await exchange.loadMarkets();

  const markets = Object.keys(exchange.markets);
  return markets;
};

const getAveragePrices = async () => {
  const exchange = new ccxt.binance();
  await exchange.loadMarkets();

  const averagePrices = {};

  for (const coin in exchange.markets) {
    const symbol = exchange.markets[coin]["symbol"];
    if (symbol.includes("/USDT")) {
      const trades = await exchange.fetchTrades(symbol, undefined, undefined, {
        limit: 100,
      });
      const prices = trades.map((trade) => parseFloat(trade.price));
      if (prices.length > 0) {
        const averagePrice =
          prices.reduce((sum, price) => sum + price, 0) / prices.length;
        averagePrices[symbol] = averagePrice;
      }
    }
  }

  return averagePrices;
};

module.exports = {
  getTradableCoins,
  getAveragePrices,
};
