const express = require("express");
const addressController = require("./controllers/addressController");
const walletController = require("./controllers/walletController");
const transactionController = require("./controllers/transactionController");
const exchangeController = require("./controllers/exchangeController");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/isValidAddress", addressController.isValidAddress);
app.get("/createWallet", walletController.createWallet);
app.get("/latestTransactions", transactionController.getLatestTransactions);
app.get("/tradable-coins", exchangeController.getTradableCoins);
app.get("/average-prices", exchangeController.getAveragePrices);

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
