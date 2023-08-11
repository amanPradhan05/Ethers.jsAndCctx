const exchangeService = require("../services/exchangeService");

const getTradableCoins = async (req, res) => {
  try {
    const tradableCoins = await exchangeService.getTradableCoins();
    res.json(tradableCoins);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getAveragePrices = async (req, res) => {
  try {
    const averagePrices = await exchangeService.getAveragePrices();
    res.json(averagePrices);
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  getTradableCoins,
  getAveragePrices,
};
